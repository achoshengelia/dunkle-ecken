import styled from 'styled-components';
import { Center } from '../../styles';

export const Line = styled.div`
	width: 100%;
	height: 1px;
	background-color: #e5e5e5;
	/* align-self: center; */
`;

export const Container = styled.footer`
	position: relative;
	z-index: 5;
	min-height: 8em;
	width: 100%;

	//why is this  affecting the hamburger menu?
	display: flex;
	justify-content: center;
	font-weight: 200;
	font-size: 1.4rem;
	/* padding-inline: 3rem; */
	${Center} {
		display: flex;
		flex-direction: column;
		justify-content: center;
		/* align-items: center; */
		${Line} {
			margin-bottom: 3rem;
		}
	}

	@media screen and (max-width: 640px) {
		font-size: 1.2rem;
		/* margin-top: 4rem; */
		${Center} {
			padding-block: 2rem;
		}
		${Line} {
		}
	}
`;

export const Content = styled.div`
	display: flex;
	justify-content: space-between;
	/* padding-inline: 1rem; */

	@media screen and (max-width: 640px) {
		flex-direction: row-reverse;
		/* margin-bottom: 2em; */

		& p {
			align-self: flex-end;
		}
	}
`;

export const List = styled.ul`
	display: flex;
	gap: 2.2em;
	height: max-content;

	@media screen and (max-width: 640px) {
		flex-direction: column;
		gap: 1.5em;
		/* margin-bottom: 1.5em; */
	}
`;

export const Mobile = styled.div``;
