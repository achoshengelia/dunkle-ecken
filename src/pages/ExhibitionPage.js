import React from 'react';
import Exhibits from '../components/Exhibition/Exhibits';
import { exhibitionData } from '../data';

const ExhibitionPage = () => {
	return <Exhibits exhibitionData={exhibitionData} />;
};

export default ExhibitionPage;
