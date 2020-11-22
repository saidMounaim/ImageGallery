const initState = {
	gallery: [],
};

export const GalleryReducers = (state = initState, action) => {
	switch (action.type) {
		case 'FETCH_GALLERY_REQUEST':
			return {
				...state,
				loading: true,
			};
		case 'FETCH_GALLERY_SUCCESS':
			return {
				...state,
				gallery: action.payload,
				loading: false,
			};
		case 'FETCH_GALLERY_FAILED':
			return {
				error: action.payload,
			};
		case 'SEARCH_GALLERY_REQUEST':
			return {
				...state,
				loading: true,
			};
		case 'SEARCH_GALLERY_SUCCESS':
			return {
				...state,
				loading: false,
				gallery: action.payload,
			};
		case 'SEARCH_GALLERY_FAILED':
			return {
				...state,
				error: action.payload,
			};
		default:
			return state;
	}
};
