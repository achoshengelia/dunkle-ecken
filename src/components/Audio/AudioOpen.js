import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { Center } from '../../styles';
import { audioIT, audioDE } from '../../data';
import {
	IdContainer,
	TextContainer,
	Title,
	Text,
	LinkAudio,
} from './AudioStyles';
import AudioPlayer from '../AudioPlayer/AudioPlayer';

const Audio = ({ audio }) => {
	const { t, i18n } = useTranslation();
	const { messageId } = useParams();

	let nextPath;
	if (i18n.language === 'de') {
		if (parseInt(messageId) === audioDE.length) {
			nextPath = `/messages/1`;
		} else {
			nextPath = `/messages/${parseInt(messageId) + 1}`;
		}
	} else if (i18n.language === 'it') {
		if (parseInt(messageId) === audioIT.length) {
			nextPath = `/messages/1`;
		} else {
			nextPath = `/messages/${parseInt(messageId) + 1}`;
		}
	}

	return (
		<IdContainer>
			<Center>
				<TextContainer>
					<Title>
						{audio.zitat}
						<br />
						<br />
						<Link to={nextPath} id='audiolink' className='pointer'>
							<LinkAudio className='pointer'>
								{' '}
								{i18n.language === 'de'
									? 'Zum nächsten Beitrag'
									: 'Al prossimo messaggio'}{' '}
							</LinkAudio>
						</Link>
					</Title>
					<Text>{audio.description}</Text>
				</TextContainer>
				<AudioPlayer audio={audio} />
			</Center>
		</IdContainer>
	);
};

export default Audio;
