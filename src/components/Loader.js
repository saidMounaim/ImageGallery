import React from 'react';
import styled from 'styled-components';

const Loader = () => {
	return (
		<SpinnerStyle>
			<div class="double-bounce1"></div>
			<div class="double-bounce2"></div>
		</SpinnerStyle>
	);
};

const SpinnerStyle = styled.div`
	width: 120px;
	height: 120px;

	position: relative;
	margin: 100px auto;
	.double-bounce1 {
		background: #55efc4;
	}
	.double-bounce2 {
		background: #00cec9;
	}
	.double-bounce1,
	.double-bounce2 {
		width: 100%;
		height: 100%;
		border-radius: 50%;
		opacity: 0.6;
		position: absolute;
		top: 0;
		left: 0;

		-webkit-animation: sk-bounce 2s infinite ease-in-out;
		animation: sk-bounce 2s infinite ease-in-out;
	}

	.double-bounce2 {
		-webkit-animation-delay: -1s;
		animation-delay: -1s;
	}

	@-webkit-keyframes sk-bounce {
		0%,
		100% {
			-webkit-transform: scale(0);
		}
		50% {
			-webkit-transform: scale(1);
		}
	}

	@keyframes sk-bounce {
		0%,
		100% {
			transform: scale(0);
			-webkit-transform: scale(0);
		}
		50% {
			transform: scale(1);
			-webkit-transform: scale(1);
		}
	}
`;

export default Loader;
