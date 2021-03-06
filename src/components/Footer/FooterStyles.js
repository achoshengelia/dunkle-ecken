import styled from 'styled-components';
import { Center } from '../../styles';

export const Line = styled.div`
	width: 100%;
	height: 1px;
	background-color: #e5e5e5;
	margin-bottom: 1em;
`;

export const Container = styled.footer`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	font-weight: 200;
	font-size: 1.4rem;
	margin-top: 5rem;
	z-index: 20;
	position: relative;
	${Center} {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	@media screen and (max-width: 640px) {
		font-size: 1.2rem;
		/* margin-top: 4rem; */
	}
`;

export const Content = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	min-height: 10rem;

	@media screen and (max-width: 640px) {
		flex-direction: row-reverse;
		align-items: flex-end;
		margin-bottom: 2em;

		& p {
			align-self: flex-end;
		}
	}
`;

export const List = styled.ul`
	display: flex;
	/* gap: 2.2em; */
	height: max-content;
	& > *:not(:last-child) {
		margin-right: 2.2em;
	}

	@media screen and (max-width: 640px) {
		flex-direction: column;
		/* gap: 1.5em; */
		& > *:not(:last-child) {
			margin-bottom: 1.5em;
		}
		/* margin-bottom: 1.5em; */
	}
`;

// export const Mobile = styled.div``;
