import React, { useState, useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Center } from '../../styles';
import {
	RadioContainer,
	Radio,
	Controller,
	Play,
	Pause,
	Progress,
	Bar,
	Percentage,
	Current,
} from './AudioPlayerStyles';

const AudioPlayer = ({ audio }) => {
	const [currentTime, setCurrentTime] = useState('00:00');
	const [percentage, setPercentage] = useState(0);
	const [isPlaying, setIsPlaying] = useState(false);
	const params = useParams();

	const audioRef = useRef(null);
	const barRef = useRef(null);

	let audioPlayer = audioRef.current;

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

	useEffect(() => setIsPlaying(false), [params]);

	useEffect(() => {
		if (audioPlayer === undefined || audioPlayer === null) {
			audioPlayer = audioRef.current;
		}
	}, [audioPlayer, audioRef]);

	return (
		<RadioContainer>
			<Radio>
				<audio
					id='player'
					ref={audioRef}
					src={audio.url}
					onTimeUpdate={initProgressBar}
				/>
				<Controller className='pointer'>
					{!isPlaying ? (
						<Play onClick={handleTogglePlay} className='pointer' />
					) : (
						<Pause onClick={handleTogglePlay} className='pointer' />
					)}
				</Controller>
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
	);
};
export default AudioPlayer;
