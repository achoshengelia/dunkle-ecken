import React from 'react';
import { Fold } from '../components/fold/Fold';
import pic1 from '../assets/pictures/exhibition/001.jpg';
import pic2 from '../assets/pictures/exhibition/002.jpg';
import pic3 from '../assets/pictures/exhibition/003.jpg';
import pic4 from '../assets/pictures/exhibition/004.jpg';
import pic5 from '../assets/pictures/exhibition/005.jpg';
import pic6 from '../assets/pictures/exhibition/006.jpg';
import pic7 from '../assets/pictures/exhibition/007.jpg';
import pic8 from '../assets/pictures/exhibition/008.jpg';
import { useTranslation } from 'react-i18next';
import { LinkArrow } from '../assets/icons';

const gallery = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8];

const link = (
	<a className='link pointer' href='https://lanalive.it/' target='_blank'>
		lana live <LinkArrow />
	</a>
);

export const AboutPage = () => {
	const { t } = useTranslation();

	const text = (
		<p className='text'>
			{t('about.text.part1')}
			<a className='linkstyle' href='https://annikaterwey.com/' target='_blank'>
				<em className='pointer'>Annika Terwey</em>
			</a>
			{t('about.text.part2')}
			<a
				className='linkstyle'
				href='https://www.instagram.com/ohnoitzsophie/'
				target='_blank'>
				<em className='pointer'>Sophie Lazari</em>
			</a>
			{t('about.text.part3')}
			<em className='pointer'> LanaLive </em>
			{t('about.text.part4')}
		</p>
	);

	const caption = <span>{t('about.subtitle')}</span>;

	const link2 = (
		<p className='support'>
			{t('about.text2.part1')}
			<a
				className='linkstyle'
				href='https://www.radiotandem.it/'
				target='_blank'>
				<em className='pointer'>Radio Tandem</em>
			</a>
			{t('about.text2.part2')}
			<a className='linkstyle' href='https://www.ariadne.bz.it' target='_blank'>
				<em className='pointer'> Association Ariadne</em>
			</a>
			{t('about.text2.part3')}
		</p>
	);

	return (
		<Fold
			text={text}
			gallery={gallery}
			link={link}
			caption={caption}
			link2={link2}
		/>
	);
};
