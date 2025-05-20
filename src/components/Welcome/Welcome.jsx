import { useRef, useState } from 'react';
import confetti from 'canvas-confetti';
import BalloonAnimation from '../BalloonAnimation/BalloonAnimation';

function Welcome({ onDismiss }) {
	const audioRef = useRef(null);
	const [isExiting, setIsExiting] = useState(false);
	const [animate, setAnimate] = useState(false);

	const handleButtonClick = () => {
		if (!audioRef.current) {
			audioRef.current = new Audio('./music.mp3');
			audioRef.current.loop = true;
		}

		audioRef.current
			.play()
			.then(() => {
				console.log('Музыка начала играть');
				setIsExiting(true);
				fire();
				setAnimate(true);

				setTimeout(() => {
					onDismiss();
				}, 2500);
			})
			.catch((error) => {
				console.error('Ошибка воспроизведения:', error);
			});
	};

	const fire = () => {
		confetti({
			particleCount: 260,
			spread: 80,
			origin: { y: 0.8 },
			colors: ['#f093f6', '#97ef7f', '#f9f68b', '#72f8f3'],
			shapes: ['square'],
		});
	};

	return (
		<>
			<div className={`welcome ${isExiting ? 'welcome--exiting' : ''}`}>
				<h1>привет!!</h1>
				<p>
					-/-/-/-/-/-/-/-/-
					<br />
					<br />
					пожалуйста, открой эту ссылку в отдельном окне браузера, а не внутри
					тг, в нём всё ломается(
					<br />
					<br />
					и не пугайся, когда нажмёшь на кнопку ниже - там музычка заиграет!
					<br />
					<br />
					-/-/-/-/-/-/-/-/-
				</p>
				<button onClick={handleButtonClick}>OK</button>
			</div>

			{animate ? (
				<div className={`salute ${isExiting ? 'salute--exiting' : ''}`}>
					<BalloonAnimation animate={animate} />
				</div>
			) : (
				''
			)}
		</>
	);
}

export default Welcome;
