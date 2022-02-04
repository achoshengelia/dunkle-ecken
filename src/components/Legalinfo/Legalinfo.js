import React from 'react';
import { Center } from '../../styles';
import { Container } from './LegalinfoStyles';

export const Legalinfo = ({ headline, text }) => {
	return (
		<Container>
			<Center>
				{headline}
				{text}
			</Center>
		</Container>
	);
};
