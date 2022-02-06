import styled from 'styled-components';
import { Center } from '../../styles';

export const Container = styled.main`
	display: flex;
	justify-content: center;

	${Center} {
		width: 90%;
		max-width: 800px;
		/* padding-inline: 2em; */
		padding: 0 2em;

		@media ${props => props.theme.breakpoints.md} {
			width: 100%;
		}
	}

	& h1 {
		text-align: left;
		margin-bottom: 2rem;
		margin-top: 3.5em;

		@media ${props => props.theme.breakpoints.md} {
			font-size: 2.5rem;
		}
	}
	& h2  {
		font-size: 2.5rem;
		font-family: 'Montserrat', Arial, Helvetica, sans-serif;
		font-weight: 500;
		margin-bottom: 1rem;
		text-align: left;
		@media ${props => props.theme.breakpoints.md} {
			font-size: 2rem;
		}
		@media ${props => props.theme.breakpoints.sm} {
			font-size: 1.8rem;
		}
	}

	& p {
		font-weight: 300;
		font-size: 2rem;

		@media ${props => props.theme.breakpoints.md} {
			font-size: 1.7rem;
		}

		@media ${props => props.theme.breakpoints.sm} {
			font-size: 1.4rem;
		}
	}
`;
