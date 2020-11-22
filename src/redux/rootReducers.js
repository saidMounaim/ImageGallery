import { combineReducers } from 'redux';
import { GalleryReducers } from './GalleryReducers';

export const rootReducers = combineReducers({
	gallery: GalleryReducers,
});
