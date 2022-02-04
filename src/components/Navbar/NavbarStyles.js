import styled from 'styled-components';
import { Center } from '../../styles';

export const LogoContainer = styled.div`
	width: max-content;
`;

export const Header = styled.header`
	display: flex;
	justify-content: center;
	margin-top: 2rem;
	width: 100%;
	position: fixed;
	z-index: 5000;
	${Center} {
		height: 4em;
		width: 100%;
		position: relative;
		${LogoContainer} {
			position: absolute;
			margin-top: 0.5rem;
		}
	}
`;

export const HamburgerContainer = styled.div`
	position: absolute;
	right: 0;
	top: 0;
	z-index: 30;
	margin-top: 1.5rem;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 1em 0.8em;
	width: max-content;
	cursor: none;
`;

export const Hamburger = styled.div`
	background-color: #e63946;
	height: 2px;
	width: 30px;
	background: ${({ showMenu }) => (showMenu ? '0' : 'transparent')};
	&::before,
	&::after {
		content: '';
		position: absolute;
		z-index: 30;
		background-color: ${props => props.theme.colors.primary1};
		height: 0.3rem;
		width: 3rem;
		border-radius: 0.09rem;
		transition: all 0.15s ease-in;
	}
	&::before {
		transform: ${({ showMenu }) =>
			showMenu ? 'translate(5px) rotate(-45deg)' : 'translateY(.5rem)'};
	}
	&::after {
		transform: ${({ showMenu }) =>
			showMenu ? 'translateX(5px) rotate(45deg)' : 'translateY(-.5rem)'};
	}
`;
