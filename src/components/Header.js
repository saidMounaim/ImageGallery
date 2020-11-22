import React from 'react';
import styled from 'styled-components';
import ToggleMode from './ToggleMode';

const Header = () => {
	return (
		<HeaderStyle>
			<h1>Image Gallery</h1>
			<ToggleMode />
		</HeaderStyle>
	);
};

const HeaderStyle = styled.div`
	padding: 2rem 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
	cursor: pointer;
`;

export default Header;
