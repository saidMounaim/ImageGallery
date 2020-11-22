import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Message = ({ status, children }) => {
	return (
		<MessageStyle className={status}>
			<span>{children}</span>
		</MessageStyle>
	);
};

const MessageStyle = styled.div`
	width: 100%;
	padding: 1.2rem;
	color: #eee;
	border-radius: 10px;
	&.success {
		background-color: #00b894;
	}
	&.failed {
		background-color: #d63031;
	}
	&.default {
		background-color: #2d3436;
	}
`;

Message.propTypes = {
	status: PropTypes.string,
	children: PropTypes.string,
};

Message.defaultProps = {
	status: 'default',
};

export default Message;
