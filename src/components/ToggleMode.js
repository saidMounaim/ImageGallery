import React, { useState } from 'react';
import styled from 'styled-components';

const ToggleMode = () => {
	const [mode, setMode] = useState('Light');

	const toggleModeBody = () => {
		if (mode == 'Light') {
			document.body.classList.add('dark-mode');
			setMode('Dark');
		} else {
			document.body.classList.remove('dark-mode');
			setMode('Light');
		}
	};

	return (
		<ToggleModeStyle onClick={toggleModeBody}>
			<h4>{mode} Mode</h4>
		</ToggleModeStyle>
	);
};

const ToggleModeStyle = styled.div`
	background: #00cec9;
	padding: 0.5rem;
	border-radius: 6px;
	font-weight: 200;
`;

export default ToggleMode;
