import styled from 'styled-components';
import { Center } from '../../styles';

export const Container = styled.main`
	display: flex;
	justify-content: center;
	margin-bottom: 5rem;
	${Center} {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		/* flex-wrap: wrap; */
		width: 100%;
		gap: 2em;
		margin-top: 10rem;
		justify-content: space-evenly;
		@media ${props => props.theme.breakpoints.xs} {
			grid-template-columns: repeat(1, 1fr);
			margin-top: 9rem;
			gap: 1em;
			/* padding-inline: 0.5rem; */
			padding: 0 0.5rem;
		}

		@media ${props => props.theme.breakpoints.sm} {
			grid-template-columns: repeat(1, 1fr);
		}

		@media ${props => props.theme.breakpoints.md} {
			grid-template-columns: repeat(2, 1fr);
			gap: 1em;
			font-size: 2rem;
		}

		@media ${props => props.theme.breakpoints.lg} {
			grid-template-columns: repeat(3, 1fr);
			font-size: 2.3rem;
		}
		@media ${props => props.theme.breakpoints.xl} {
			grid-template-columns: repeat(3, 1fr);
			font-size: 2.3rem;
		}
	}
`;

export const MainImage = styled.img`
	width: 100%;
	/* max-width: 50rem; */
	/* height: 100%; */
	height: 28rem;
	object-fit: cover;
	@media (hover: hover) {
		&:hover {
			cursor: none;
			opacity: 0.7;
			background: ${props => props.theme.colors.primaryYellow};
			-webkit-filter: grayscale(1) sepia(40%) invert(12%) hue-rotate(23deg)
				saturate(390%);
			filter: grayscale(50) sepia(40%) invert(12%) hue-rotate(23deg)
				saturate(390%);
			transform: scale(1.01);
		}
	}
	@media ${props => props.theme.breakpoints.xs} {
		height: 20rem;
	}
	/* height auto; */
`;

export const Name = styled.div`
	font-size: 2.3rem;
	font-family: 'Montserrat', Arial, sans serif;
	text-align: left;
	/* display: block; */
	width: 100%;
	/* max-width: 28vw; */

	@media ${props => props.theme.breakpoints.xs} {
		font-size: 1.8rem;
	}

	@media ${props => props.theme.breakpoints.sm} {
		font-size: 1.8rem;
	}

	@media ${props => props.theme.breakpoints.md} {
		font-size: 2rem;
	}
`;

export const ExhibitContainer = styled.div`
	max-width: 60rem;
	height: max-content;
	&:not(:last-child) {
		margin-bottom: 1em;
	}
	@media (hover: hover) {
		&:hover {
			cursor: crosshair;
			${Name} {
				color: ${props => props.theme.colors.primaryYellow};
			}
		}
	}
`;

export const IdContainer = styled.main`
	display: flex;
	justify-content: center;
	height: 100%;

	${Center} {
		margin-top: auto;
		display: flex;
		/* margin-bottom: 6em; */
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	@media ${props => props.theme.breakpoints.xs} {
		${Center} {
			margin-bottom: 1em;
		}
	}
`;

export const CardContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-self: center;
	margin-top: min(15vh, 10em);
`;

export const Image = styled.img`
	width: 100%;
	max-width: 100rem;
	max-height: 50rem;
	object-fit: cover;
	align-self: center;
`;

export const TextContainer = styled.section`
	display: flex;
	/* gap: 2em; */
	align-self: center;
	margin-top: 3rem;
	width: 100%;

	@media ${props => props.theme.breakpoints.xs} {
		flex-direction: column;
	}

	@media ${props => props.theme.breakpoints.sm} {
		flex-direction: column;
	}
`;
export const NamesContainer = styled.div`
	width: 50%;
	font-size: 2.3rem;
	@media ${props => props.theme.breakpoints.xs} {
		width: 100%;
	}
`;

export const Description = styled.p`
	width: 100%;
	font-size: 1.8rem;
	line-height: 2.5rem;
	margin-top: 2em;
	@media ${props => props.theme.breakpoints.xs} {
		font-size: 1.4rem;
	}

	@media ${props => props.theme.breakpoints.sm} {
		font-size: 1.5rem;
	}

	@media ${props => props.theme.breakpoints.md} {
		font-size: 1.6rem;
	}
`;

export const Name2 = styled.h4`
	font-size: 1.8rem;
	font-family: 'Montserrat', Arial, sans serif;
	font-weight: 300;
	text-align: left;
	margin-top: 1.8rem;
	line-height: 2.5rem;

	& a {
		cursor: none;
		transition: transform 0.3s ease-out;
		@media (hover: hover) {
			&:hover {
				color: #ebff06;
				font-family: 'Montserrat', Times, serif;
				font-style: italic;
			}
		}
	}

	@media ${props => props.theme.breakpoints.xs} {
		font-size: 1.5rem;
	}

	@media ${props => props.theme.breakpoints.sm} {
		font-size: 1.6rem;
	}

	@media ${props => props.theme.breakpoints.md} {
		font-size: 1.7rem;
	}
`;
