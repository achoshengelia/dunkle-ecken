import styled from 'styled-components';

export const RadioContainer = styled.div`
	position: fixed;
	display: flex;
	justify-content: center;
	width: 100%;
	max-height: 7rem;
	bottom: 0;
	background-color: black;
`;

export const Radio = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	max-width: 128rem;
	padding: 0.8em;
	margin: 0 3rem;
	border: solid 2px white;
	background-color: black;
	width: 100%;
	margin-top: 0.5em;
	@media ${props => props.theme.breakpoints.sm} {
		width: 90%;
	}
	@media ${props => props.theme.breakpoints.xs} {
		/* margin-inline: 1.5rem; */
		margin: 0 1.5rem;
	}
`;

export const Controller = styled.div``;

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
	@media (hover: hover) {
		&:hover {
			-webkit-filter: sepia(40%) hue-rotate(23deg) saturate(390%);
			filter: sepia(1000%) hue-rotate(23deg) saturate(790%);
		}
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
	width: 85%;
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
