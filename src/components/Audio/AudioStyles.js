import styled from 'styled-components';
import { Center } from '../../styles';

// Container, AudioContainer, BorderContainer, Zitat
export const Container = styled.main`
	display: flex;
	justify-content: center;

	${Center} {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		width: 100%;
		gap: 1em;
		margin-top: 6em;
		justify-content: space-evenly;
		margin-inline: 4rem;

		@media ${props => props.theme.breakpoints.xs} {
			grid-template-columns: repeat(1, 1fr);
			margin-bottom: 2em;
			margin-top: 8rem;
			gap: 0.5em;
			margin-inline: 2rem;
		}

		@media ${props => props.theme.breakpoints.sm} {
			grid-template-columns: repeat(1, 1fr);
			margin-bottom: 2em;
		}

		@media ${props => props.theme.breakpoints.md} {
			grid-template-columns: repeat(1, 1fr);
			gap: 1em;
			font-size: 2rem;
		}

		@media screen and (min-width: 700px) and (max-width: 1050px) {
			grid-template-columns: repeat(2, 1fr);
		}

		@media ${props => props.theme.breakpoints.xl} {
			grid-template-columns: repeat(3, 1fr);
			font-size: 2.3rem;
		}
	}
`;

export const Zitat = styled.div`
	font-size: 3.3rem;
	/* inline-size: 3.6rem; */
	/* padding: 2rem; */
	font-family: 'Montserrat', Arial, sans serif;
	text-align: left;
	/* min-width: 30vw; */
	/* width: 100%; */

	@media ${props => props.theme.breakpoints.xs} {
		font-size: 2.5rem;
		/* min-width: 75vw; */
	}

	@media ${props => props.theme.breakpoints.sm} {
		font-size: 3.5rem;
		/* min-width: 75vw; */
	}

	@media ${props => props.theme.breakpoints.md} {
		font-size: 3rem;
		/* min-width: 75vw; */
	}

	@media screen and (min-width: 1051px) and (max-width: 1200px) {
		font-size: 2.8rem;
		/* min-width: 30vw; */
	}
	@media screen and (min-width: 700px) and (max-width: 1050px) {
		font-size: 3rem;
		/* min-width: 40vw; */
	}

	@media screen and (min-width: 700px) and (max-width: 1000px) {
		font-size: 2.5rem;
		/* min-width: 40vw; */
		word-break: inherit;
	}
`;

export const AudioContainer = styled.div`
	/* max-width: 100rem; */
	height: 25rem;
	/* width: 100%; */
	padding: 1em;
	border: solid white 1px;

	&:not(:last-child) {
		margin-bottom: 1em;
	}
	&:hover {
		cursor: none;
		opacity: 0.7;
		background: ${props => props.theme.colors.primaryYellow};
		transform: scale(1.01);
		color: black;
		border: 1px solid ${props => props.theme.colors.primaryYellow};
	}
	@media ${props => props.theme.breakpoints.xs} {
		height: 15rem;
	}
`;

export const IdContainer = styled.main`
	display: flex;
	justify-content: center;
	height: 100vh;
	${Center} {
		margin-top: 6em;
		display: flex;
		flex-direction: column;

		/* margin-bottom: 6em; */
		justify-content: flex-start;
	}
`;

export const TextContainer = styled.div`
	display: flex;
	gap: 2em;
	align-self: center;
	margin-top: 3rem;
	width: 80%;

	@media ${props => props.theme.breakpoints.xs} {
		flex-direction: column;
	}

	@media ${props => props.theme.breakpoints.sm} {
		flex-direction: column;
	}

	@media screen and (min-width: 600px) and (max-width: 900px) {
		flex-direction: column;
		width: 95%;
		margin-left: 2%;
	}
`;

export const Title = styled.h2`
	width: 50%;
	font-size: 2.3rem;
	text-align: left;
	font-family: 'Montserrat', 'Arial', sans-serif;
	font-weight: 400;

	@media ${props => props.theme.breakpoints.xs} {
		width: 95%;
		font-size: 2rem;
	}

	@media ${props => props.theme.breakpoints.sm} {
		width: 95%;
	}
	@media screen and (min-width: 600px) and (max-width: 900px) {
		width: 95%;
	}
`;

export const Text = styled.p`
	width: 100%;
	font-size: 1.8rem;
	line-height: 2.5rem;
	max-height: 55rem;
	overflow-y: auto;

	@media ${props => props.theme.breakpoints.xs} {
		font-size: 1.4rem;
	}

	@media ${props => props.theme.breakpoints.sm} {
		width: 98%;
		font-size: 1.6rem;
	}
`;

export const LinkAudio = styled.span`
	font-size: 2rem;
	text-align: left;
	font-family: 'Montserrat', 'Arial', sans-serif;
	font-weight: 300;

	&:hover {
		cursor: none;
		transition: transform 0.3s ease-out;
		color: ${props => props.theme.colors.primaryYellow};
		font-style: italic;
		transform: translateY(40px);
	}

	@media ${props => props.theme.breakpoints.xs} {
		font-size: 1.6rem;
	}

	@media ${props => props.theme.breakpoints.sm} {
		font-size: 1.8rem;
	}
`;

export const Player = styled.div`
	width: 100%;
`;

export const Controler = styled.div``;

export const Play = styled.button`
	/* -webkit-appearance: none; */
	outline: none;
	cursor: none;
	border: none;
	width: 30px;
	height: 30px;
	background: url('https://img.icons8.com/ios-filled/100/ffffff/play--v1.png')
		no-repeat center;
	background-size: contain;

	&:hover {
		-webkit-filter: sepia(40%) hue-rotate(23deg) saturate(390%);
		filter: sepia(1000%) hue-rotate(23deg) saturate(790%);
	}

	&.pause {
		background: url('https://icons8.com/icon/9987/pause') no-repeat center;
		background-size: contain;
	}
`;

export const Pause = styled.button`
	-webkit-appearance: none;
	outline: none;
	cursor: none;
	border: none;
	width: 30px;
	height: 30px;
	background: url('https://img.icons8.com/ios-filled/100/ffffff/pause--v1.png')
		no-repeat center;
	opacity: 100%;
	background-size: contain;

	&:hover {
		-webkit-filter: sepia(40%) hue-rotate(23deg) saturate(390%);
		filter: sepia(1000%) hue-rotate(23deg) saturate(790%);
	}

	&.pause {
		background: url('https://icons8.com/icon/9987/pause') no-repeat center;
		background-size: contain;
	}
`;

export const Progress = styled.div`
	position: relative;
	width: 90rem;
	margin: 0 5px;
	height: 10px;
`;

export const Bar = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	border: 0.1px solid white;
	cursor: none;
`;

export const Percentage = styled.div`
	position: absolute;
	left: 0;
	top: 0;
	height: 100%;
	width: ${({ percentage }) => `${percentage}%`};
	background-color: ${props => props.theme.colors.primaryYellow};
`;

export const Current = styled.div`
	width: 3em;
`;

export const Radio = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	max-height: 7rem;
	padding: 1rem;
	border: solid 2px white;
	align-self: center;
	width: 100%;
	margin-top: 0.5em;
	@media ${props => props.theme.breakpoints.sm} {
		width: 90%;
	}
`;
