import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Center } from '../styles';

const Container = styled.main`
	display: flex;
	justify-content: center;

	${Center} {
		width: 100vw;
		height: 85vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		& .pointer {
			margin-top: 2em;

			&:hover {
				color: #ebff06;
			}
		}
	}
`;
const NotFoundPage = () => {
	return (
		<Container>
			<Center>
				<h1>Page not found :(</h1>
				<Link to='/' className='pointer'>
					GO BACK HOME
				</Link>
			</Center>
		</Container>
	);
};

export default NotFoundPage;
