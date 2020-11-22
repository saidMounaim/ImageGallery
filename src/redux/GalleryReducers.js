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
		default:
			return state;
	}
};
