import styled from 'styled-components';
import { Center } from '../../styles';

export const Container = styled.nav`
	position: fixed;
	z-index: 20;
	display: flex;
	justify-content: center;
	/* align-items: center; */
	height: 100vh;
	width: 100%;
	background-color: ${props => props.theme.colors.background};
	${Center} {
		padding-top: 10vh;
	}

	@media ${props => props.theme.breakpoints.sm} {
		padding-top: 4vh;
	}
`;

export const MenuPoints = styled.ul`
	font-family: ${props => props.theme.fonts.title};
	font-size: 6rem;
	line-height: 8rem;
	color: #e5e5e5;
	& li {
		cursor: none;
		transition: transform 0.3s ease-out;
		padding: 0.15em;
		width: max-content;
		text-transform: uppercase;
		&:hover {
			transform: translateX(4%);
			color: #ebff06;
			font-family: 'lacklineregular', Times, serif;
		}
	}

	@media ${props => props.theme.breakpoints.lg} {
		font-size: 5.5rem;
		line-height: 7rem;
	}

	@media ${props => props.theme.breakpoints.xs} {
		font-size: 3.5rem;
		line-height: 7rem;
	}

	@media ${props => props.theme.breakpoints.sm} {
		font-size: 3.5rem;
		line-height: 7rem;
	}

	@media ${props => props.theme.breakpoints.md} {
		font-size: 4.5rem;
		line-height: 7rem;
	}

	@media ${props => props.theme.breakpoints.lg} {
		font-size: 5.5rem;
		line-height: 7rem;
	}
	@media ${props => props.theme.breakpoints.xl} {
		font-size: 6rem;
		line-height: 8rem;
	}
`;

export const Language = styled.ul`
	display: flex;
	font-size: 2.4rem;
	font-weight: 300;
	& li {
		cursor: none;
		transition: transform 0.3s ease-out;
		padding: 0.7em;
		&:not(:first-child) {
			margin-left: 2.2rem;
		}
		&:hover {
			transform: translateX(10%);
			color: #ebff06;
			font-family: 'Montserrat', Times, serif;
			font-style: italic;
		}
	}

	@media ${props => props.theme.breakpoints.xs} {
		font-size: 2rem;
		line-height: 7rem;
	}

	@media ${props => props.theme.breakpoints.sm} {
		font-size: 2rem;
		line-height: 7rem;
	}
`;
