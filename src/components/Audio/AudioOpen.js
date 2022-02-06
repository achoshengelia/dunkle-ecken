import React, { useState, useRef, useEffect } from 'react';
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
	RadioContainer,
	Player,
	Controler,
	Play,
	Bar,
	Progress,
	Radio,
	Current,
	Percentage,
	Pause,
} from './AudioStyles';

const Audio = ({ audio }) => {
	const { t, i18n } = useTranslation();
	const { messageId } = useParams();
	const [currentTime, setCurrentTime] = useState('00:00');
	const [percentage, setPercentage] = useState(0);
	const [isPlaying, setIsPlaying] = useState(false);

	const audioRef = useRef(null);
	const barRef = useRef(null);
	let audioPlayer = audioRef.current;
	// const audioPlayer = document.getElementById("player");

	useEffect(() => {
		if (audioPlayer === undefined || audioPlayer === null) {
			audioPlayer = audioRef.current;
		}
	}, [audioPlayer, audioRef]);

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

	const handleTogglePlay = () => {
		if (!audioPlayer.paused) {
			audioPlayer.pause();
			setIsPlaying(false);
		} else {
			audioPlayer.play();
			setIsPlaying(true);
		}
	};
	const calculatePercentPlayed = () => {
		const percentage =
			(audioPlayer.currentTime / audioPlayer.duration).toFixed(2) * 100;
		setPercentage(percentage);
	};
	const calculateCurrentValue = currentTime => {
		const currentMinute = parseInt(currentTime / 60) % 60;
		const currentSecondsLong = currentTime % 60;
		const currentSeconds = currentSecondsLong.toFixed();
		const currentTimeFormatted = `${
			currentMinute < 10 ? `0${currentMinute}` : currentMinute
		}:${currentSeconds < 10 ? `0${currentSeconds}` : currentSeconds}`;

		return currentTimeFormatted;
	};
	const initProgressBar = () => {
		const currentTime = calculateCurrentValue(audioPlayer.currentTime);

		setCurrentTime(currentTime);

		calculatePercentPlayed();
		if (audioPlayer.ended) {
			setCurrentTime('00:00');
			setPercentage(0);
		}
	};
	const handleSeek = e => {
		const percent = e.nativeEvent.offsetX / barRef.current.offsetWidth;
		audioPlayer.currentTime = percent * audioPlayer.duration;
	};

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

				<RadioContainer>
					<audio
						id='player'
						ref={audioRef}
						src={audio.url}
						onTimeUpdate={initProgressBar}
					/>
					<Radio>
						<Controler className='pointer'>
							{!isPlaying ? (
								<Play onClick={handleTogglePlay} className='pointer' />
							) : (
								<Pause onClick={handleTogglePlay} className='pointer' />
							)}
						</Controler>
						<Progress>
							<Bar ref={barRef} onClick={handleSeek} className='pointer'>
								<Percentage
									percentage={percentage}
									className='pointer'></Percentage>
							</Bar>
						</Progress>
						<Current>{currentTime}</Current>
					</Radio>
				</RadioContainer>
			</Center>
		</IdContainer>
	);
};

export default Audio;
