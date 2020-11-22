import React from 'react';
import styled from 'styled-components';

const Header = () => {
	return (
		<HeaderStyle>
			<h1>Image Gallery</h1>
		</HeaderStyle>
	);
};

const HeaderStyle = styled.div`
	padding: 2rem 0;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export default Header;
