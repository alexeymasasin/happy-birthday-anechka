import { useRef, useState } from 'react';
import confetti from 'canvas-confetti';

function Welcome({ onDismiss }) {
	const audioRef = useRef(null);
	const [isExiting, setIsExiting] = useState(false);

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
			particleCount: 150,
			spread: 100,
			origin: { y: 0.7 },
			colors: ['#f093f6', '#97ef7f', '#f9f68b', '#72f8f3'],
			shapes: ['square'], // Пиксельные квадратики
		});
	};

	return (
		<>
			<div className={`welcome ${isExiting ? 'welcome--exiting' : ''}`}>
				<h1>привет!</h1>
				<p>
					-/-/-/-/-/-/-/-/-
					<br />
					<br />
					когда нажмёшь на кнопочку ниже, пожалуйста, не пугайся, - там музычка
					заиграет.
					<br />
					<br />
					постарайся не блокировать экран и не сворачивать браузер, а то всё
					сломается(
					<br />
					<br />
					-/-/-/-/-/-/-/-/-
				</p>
				<button onClick={handleButtonClick}>OK</button>
			</div>

			<div className={`salute ${isExiting ? 'salute--exiting' : ''}`}></div>
		</>
	);
}

export default Welcome;
