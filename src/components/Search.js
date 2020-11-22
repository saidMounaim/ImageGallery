import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchGalleryAction } from '../redux/GalleryActions';
import styled from 'styled-components';

const Search = () => {
	const [query, setQuery] = useState('');
	const dispatch = useDispatch();

	const handleChangeQuery = (e) => {
		setQuery(e.target.value);
	};

	const handleKeyUpForm = (e) => {
		e.preventDefault();
		dispatch(searchGalleryAction(query === '' ? `yellow+flowers` : query));
	};

	return (
		<SearchStyle>
			<form onKeyUp={handleKeyUpForm}>
				<input type="text" placeholder="Search" value={query} onChange={handleChangeQuery} />
			</form>
		</SearchStyle>
	);
};

const SearchStyle = styled.div`
	padding: 1.2rem 0;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	input {
		font-size: 17px;
		font-weight: 200;
		color: #dbe2e9;
		border-bottom: 1px solid #dbe2e9;
		padding: 0.7rem;
		&::placeholder {
			color: #dbe2e9;
		}
	}
`;

export default Search;
