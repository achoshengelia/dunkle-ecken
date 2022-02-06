import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import Audios from '../components/Audio/Audio';
import { audioIT, audioDE } from '../data';

export const AudiosPage = () => {
	const { i18n } = useTranslation();

	return <Audios audioData={i18n.language === 'de' ? audioDE : audioIT} />;
};

// export default AudioPage;
