import React from 'react';
import { Link } from 'react-router-dom';
import { Fold } from '../components/fold/Fold';
import pic1 from '../assets/pictures/home/001.png';
import pic2 from '../assets/pictures/home/002.png';
import pic3 from '../assets/pictures/home/003.png';
import pic4 from '../assets/pictures/home/004.png';
import pic5 from '../assets/pictures/home/005.png';
import pic6 from '../assets/pictures/home/006.png';
import pic7 from '../assets/pictures/home/007.png';
import pic8 from '../assets/pictures/home/008.png';
import pic9 from '../assets/pictures/home/009.png';
import pic10 from '../assets/pictures/home/010.png';
import { useTranslation } from 'react-i18next';

const gallery = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10];

export const HomePage = () => {
	const { t } = useTranslation();

	const text = (
		<p className='text'>
			{t('home.text.paragraph1')}
			<br />
			<br />
			{t('home.text.paragraph2')}
			<br />
			<br />
			{t('home.text.paragraph3')}
			<br />
			<br />
			{t('home.text.paragraph4')}
		</p>
	);
	const link = (
		<Link className='link pointer' to='/exhibition'>
			{t('home.link')} ↗
		</Link>
	);
	return <Fold text={text} gallery={gallery} link={link} />;
};
