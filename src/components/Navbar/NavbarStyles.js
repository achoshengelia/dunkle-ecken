import styled from 'styled-components';
import { Center } from '../../styles';

export const LogoContainer = styled.div`
	width: max-content;
	@media ${props => props.theme.breakpoints.xs} {
		& svg {
			width: 4rem;
			height: 4rem;
		}
	}
`;

export const Header = styled.header`
	display: flex;
	justify-content: center;
	width: 100%;
	margin-top: 2rem;
	position: fixed;
	z-index: 5000;
	${Center} {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 4em;
		width: 100%;
		@media ${props => props.theme.breakpoints.xs} {
			/* margin-inline: 1rem; */
			margin: 0 1rem;
			height: 2em;
		}
	}
`;

export const HamburgerContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: max-content;
	height: 1.5em;
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
