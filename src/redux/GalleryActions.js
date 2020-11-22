import axios from 'axios';
import { API_URL } from '../api';

export const loadGalleryAction = () => async (dispatch) => {
	try {
		dispatch({ type: 'FETCH_GALLERY_REQUEST' });
		const galleryData = await axios.get(`${API_URL}&q=yellow+flowers&image_type=photo&pretty=true`);
		dispatch({ type: 'FETCH_GALLERY_SUCCESS', payload: galleryData.data.hits });
	} catch (error) {
		dispatch({ type: 'FETCH_GALLERY_FAILED', payload: error.message });
		console.error(error.message);
	}
};

export const searchGalleryAction = (query) => async (dispatch) => {
	try {
		dispatch({ type: 'SEARCH_GALLERY_REQUEST' });
		const galleryData = await axios.get(`${API_URL}&q=${query}&image_type=photo&pretty=true`);
		dispatch({ type: 'SEARCH_GALLERY_SUCCESS', payload: galleryData.data.hits });
	} catch (error) {
		dispatch({ type: 'SEARCH_GALLERY_FAILED', payload: error.message });
		console.log(error.message);
	}
};
