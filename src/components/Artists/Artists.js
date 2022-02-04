import React from 'react';
import { Center } from '../../styles';
import { Artist } from './Artist';
import { ArtistList, Container } from './ArtistsStyles';

export const Artists = ({ artists }) => {
	return (
		<Container>
			<Center>
				<ArtistList>
					{artists.map(item => (
						<Artist key={item.name} item={item} />
					))}
				</ArtistList>
			</Center>
		</Container>
	);
};
