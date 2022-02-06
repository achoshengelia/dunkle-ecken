import React from 'react';
import styled from 'styled-components';
import { Center } from '../styles';

const Container = styled.main`
	display: flex;
	justify-content: center;

	${Center} {
		width: 100vw;
		height: 85vh;
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;
const NotFoundPage = () => {
	return (
		<Container>
			<Center>
				<h1>Page not found :(</h1>
			</Center>
		</Container>
	);
};

export default NotFoundPage;
