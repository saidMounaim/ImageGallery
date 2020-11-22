import React from 'react';
import styled from 'styled-components';

const Header = () => {
	return (
		<HeaderStyle>
			<nav>
				<ul>
					<li>
						<a href="/">Gallery</a>
					</li>
					<li>
						<a href="/videos">Videos</a>
					</li>
				</ul>
			</nav>
		</HeaderStyle>
	);
};

const HeaderStyle = styled.div`
	padding: 2rem 0;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	ul {
		display: flex;
		align-items: center;
		li {
			font-size: 15px;
			font-weight: 200;
			color: #334043;
			margin-left: 2rem;
			position: relative;
			padding-bottom: 5px;
			font-weight: 500;
			a {
				color: #334043;
			}
			&:after {
				content: '';
				width: 0;
				height: 1px;
				background-color: #334043;
				position: absolute;
				bottom: 0;
				left: 0;
				transition: all 0.4s ease;
			}
			&:hover {
				&:after {
					width: 100%;
				}
			}
		}
	}
`;

export default Header;
