import React from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Audio from '../components/Audio/AudioOpen';
import { audioIT, audioDE } from '../data';

export const AudioPage = () => {
	const params = useParams();
	const { t, i18n } = useTranslation();

	if (i18n.language === 'de') {
		const [audio] = audioDE.filter(item => item.id == params.messageId);
		return <Audio audio={audio} />;
	} else if (i18n.language === 'it') {
		const [audio] = audioIT.filter(item => item.id == params.messageId);
		return <Audio audio={audio} />;
	} else return <div>Error</div>;
};

// export default AudioPage;
