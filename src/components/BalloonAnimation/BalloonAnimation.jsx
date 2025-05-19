import React, { useEffect, useRef } from 'react';
import './BalloonAnimation.css';

const BalloonAnimation = ({ animate }) => {
	const balloons = useRef([
		{ id: 1, src: './balloons/balloon1.png', delay: 0, duration: 2.5 },
		{ id: 2, src: './balloons/balloon2.png', delay: 0, duration: 2 },
		{ id: 3, src: './balloons/balloon3.png', delay: 0, duration: 2.25 },
	]);

	useEffect(() => {}, []);

	return (
		<div className="balloon-container">
			{balloons.current.map((balloon) => (
				<img
					key={balloon.id}
					src={balloon.src}
					alt={`Balloon ${balloon.id}`}
					className={`balloon ${animate ? 'animate' : ''}`}
					style={{
						'--delay': `${balloon.delay}s`,
						'--duration': `${balloon.duration}s`,
						left: `${10 + balloon.id * 25}%`,
					}}
				/>
			))}
		</div>
	);
};

export default BalloonAnimation;
