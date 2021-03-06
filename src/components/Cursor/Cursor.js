import React, { useState, useRef, useEffect } from 'react';
import { keyframes, css } from 'styled-components';
import styled from 'styled-components';
import { MouseDefault } from '../../assets/icons';

const Rotation = keyframes`
   0% {
    -webkit-transform: rotate3d(0, 0, 1, 0deg);
    transform: rotate3d(0, 0, 1, 0deg);
  }
  25% {
    -webkit-transform: rotate3d(0, 0, 1, 90deg);
    transform: rotate3d(0, 0, 1, 90deg);
  }
  50% {
    -webkit-transform: rotate3d(0, 0, 1, 180deg);
    transform: rotate3d(0, 0, 1, 180deg);
  }
  75% {
    -webkit-transform: rotate3d(0, 0, 1, 270deg);
    transform: rotate3d(0, 0, 1, 270deg);
  }
  100% {
    -webkit-transform: rotate3d(0, 0, 1, 360deg);
    transform: rotate3d(0, 0, 1, 360deg);
  }
`;

const CursorStyles = styled.i`
	height: 3rem;
	width: 3rem;
	border-radius: 100%;
	position: fixed;
	z-index: 99000;
	pointer-events: none;
	animation: ${({ isPointer }) =>
		!isPointer
			? css`
					${Rotation} 6s normal linear infinite
			  `
			: null};
	& svg {
		transform: ${({ isPointer }) => (isPointer ? 'scale(1.3)' : null)};
		transition: transform 0.2s ease-in-out;
	}
	transition: box-shadow 0.2s ease-in-out;
	box-shadow: ${({ isPointer }) =>
		isPointer ? '0 0 30px rgba(255, 255, 0, 0.5)' : null};
`;

const Cursor = () => {
	const [isDefault, setIsDefault] = useState(true);
	const [isPointer, setIsPointer] = useState(false);
	const cursorRef = useRef(null);

	useEffect(() => {
		document.addEventListener('mousemove', e => {
			// cursorRef.current.style.inset = `${e.clientY - 15}px auto auto ${
			// 	e.clientX - 15
			// }px`;
			cursorRef.current.style.top = `${e.clientY - 15}px`;
			cursorRef.current.style.left = `${e.clientX - 15}px`;
		});

		document.addEventListener('mouseover', e => {
			if (
				e.target.classList.contains('pointer') ||
				e.target.classList.contains('swiper-button-next') ||
				e.target.classList.contains('swiper-button-prev')
			) {
				setIsDefault(false);
				setIsPointer(true);
			} else {
				setIsDefault(true);
				setIsPointer(false);
			}
		});
		return () => {
			document.removeEventListener('mousemove', e => {
				cursorRef.current.style.inset = `${e.clientY - 15}px auto auto ${
					e.clientX - 15
				}px`;
			});
			document.removeEventListener('mouseover', e => {
				if (
					e.target.classList.contains('pointer') ||
					e.target.classList.contains('swiper-button-next') ||
					e.target.classList.contains('swiper-button-prev')
				) {
					setIsDefault(false);
					setIsPointer(true);
				} else {
					setIsDefault(true);
					setIsPointer(false);
				}
			});
		};
	}, [cursorRef, isDefault, isPointer]);

	return (
		<CursorStyles ref={cursorRef} isPointer={isPointer}>
			<MouseDefault />
		</CursorStyles>
	);
};

export default Cursor;
