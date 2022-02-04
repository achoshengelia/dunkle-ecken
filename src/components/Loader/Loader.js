import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import loader from '../../assets/preloader/intro.mp4';
import mobileloader from '../../assets/preloader/IntroMobile.mp4';
import useWindowDimensions from '../../assets/hooks/useWindowDimensions';

const Video = styled.video`
	position: fixed;
	width: 100vw;
	height: 100vh;
	z-index: 10000;
	inset: 0;
	background-color: #fff;
	object-fit: cover;
	transition: opacity 1s ease, visibility 0ms 1s ease;
	opacity: ${({ isLoaded }) => (isLoaded ? '0' : '1')};
	visibility: ${({ isLoaded }) => (isLoaded ? 'hidden' : 'visible')};
`;

const Loader = () => {
	const [isLoaded, setIsLoaded] = useState(false);
	const [willUnmount, setWillUnmount] = useState(false);
	const videoRef = useRef(null);
	const { width } = useWindowDimensions();

	useEffect(() => {
		setTimeout(() => {
			setIsLoaded(true);
		}, 4200);
		setTimeout(() => {
			setWillUnmount(true);
		}, 5200);
	}, []);

	if (width < 701) {
		return (
			<>
				{!willUnmount ? (
					<Video autoPlay muted isLoaded={isLoaded} ref={videoRef}>
						<source src={mobileloader} type='video/mp4' />
					</Video>
				) : null}
			</>
		);
	} else {
		return (
			<>
				{!willUnmount ? (
					<Video autoPlay muted isLoaded={isLoaded} ref={videoRef}>
						<source src={loader} type='video/mp4' />
					</Video>
				) : null}
			</>
		);
	}
};

export default Loader;
