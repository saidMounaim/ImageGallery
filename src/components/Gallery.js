import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { loadGalleryAction } from '../redux/GalleryActions';
import Loader from './Loader';
import Message from './Message';

const Gallery = () => {
	const dispatch = useDispatch();

	const { gallery, loading, error } = useSelector((state) => state.gallery);

	console.log(gallery);

	useEffect(() => {
		dispatch(loadGalleryAction());
	}, [dispatch]);

	return (
		<>
			{loading ? (
				<Loader />
			) : error ? (
				<Message status="failed">{error}</Message>
			) : (
				<GalleryStyle>
					{gallery.map((c) => (
						<div className="card" key={c.id}>
							<img src={c.webformatURL} alt={c.id} />
							<div className="card-info">
								<h3>{c.user}</h3>
								<span>
									{c.likes} Likes . {c.downloads} downloads
								</span>
							</div>
						</div>
					))}
				</GalleryStyle>
			)}
		</>
	);
};

const GalleryStyle = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-gap: 20px;
	margin-top: 20px;
	padding-bottom: 90px;
	.card {
		width: 100%;
		height: 350px;
		position: relative;
		border-radius: 10px;
		overflow: hidden;
		img {
			height: 100%;
		}
		.card-info {
			width: 100%;
			height: 100px;
			position: absolute;
			bottom: -100%;
			left: 0;
			background: rgb(51 64 67 / 0.61);
			color: white;
			padding: 1.5rem;
			transition: all 0.5s;
			h3 {
				font-size: 17px;
				font-weight: 500;
				padding-bottom: 7px;
			}
			span {
				font-size: 15px;
				font-weight: 200;
			}
		}
		&:hover {
			.card-info {
				bottom: 0;
			}
		}
	}
`;

export default Gallery;
