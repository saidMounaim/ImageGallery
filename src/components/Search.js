import React from 'react';
import styled from 'styled-components';

const Search = () => {
	return (
		<SearchStyle>
			<form>
				<input type="text" placeholder="Search" />
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
