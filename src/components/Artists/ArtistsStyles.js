import styled from 'styled-components';
import { Center } from '../../styles';

export const Container = styled.main`
	display: flex;
	justify-content: center;
	${Center} {
		margin-bottom: 15vh;
	}
`;
export const LinkArrow = styled.span`
	opacity: 0;
	margin-left: 0.3em;
`;

export const ArtistList = styled.ul`
	font-family: ${props => props.theme.fonts.title};
	font-size: 6rem;
	line-height: 8rem;
	color: #e5e5e5;
	padding-top: 2em;

	@media ${props => props.theme.breakpoints.xs} {
		font-size: 2.2rem;
		line-height: 6rem;
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

export const ArtistItem = styled.li`
	position: relative;
	/* cursor: pointer; */
	transition: transform 0.3s ease-out;
	padding: 0.3em;
	width: max-content;
	@media (hover: hover) {
		&:hover {
			transform: translateX(4%);
			color: #ebff06;
			font-family: 'lacklineregular', Times, serif;
			${LinkArrow} {
				opacity: 1;
			}
			& img {
				opacity: 1;
				transform: translateX(0) translateY(-30%);
				visibility: visible;
				z-index: -10;
			}
		}
	}
	& img {
		opacity: 0;
		visibility: hidden;
		position: absolute;
		left: 13em;
		transform: translateX(-50%) translateY(-30%);
		transition: all 0.3s ease-in;
		max-width: 30vw;
		max-height: 30vw;
		/* z-index: -10; */
	}

	@media ${props => props.theme.breakpoints.lg} {
	}

	@media ${props => props.theme.breakpoints.xs} {
		& img {
			max-width: 40vw;
			max-height: 40vw;
			left: 4.5em;
			transform: translateX(-50%) translateY(-30%);
		}
	}

	@media ${props => props.theme.breakpoints.sm} {
		& img {
			max-width: 40vw;
			max-height: 40vw;
			left: 7.5em;
			transform: translateX(-50%) translateY(-30%);
		}
	}

	@media ${props => props.theme.breakpoints.md} {
		& img {
			max-width: 40vw;
			max-height: 40vw;
			left: 9em;
			transform: translateX(-50%) translateY(-30%);
		}
	}

	@media ${props => props.theme.breakpoints.lg} {
		& img {
			max-width: 30vw;
			max-height: 30vw;
			left: 10.5em;
			transform: translateX(-50%) translateY(-30%);
		}
	}

	@media screen and (min-width: 1100px) {
		& img {
			left: 12.5em;
		}
	}

	@media ${props => props.theme.breakpoints.xl} {
		& img {
			max-width: 30vw;
			max-height: 30vw;
			left: 13.5em;
		}
	}
`;
