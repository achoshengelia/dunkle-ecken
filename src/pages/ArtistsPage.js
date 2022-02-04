import React from 'react';
import { Artists } from '../components/Artists/Artists';
import { artistsData } from '../data';

export const ArtistsPage = () => {
	return <Artists artists={artistsData} />;
};
