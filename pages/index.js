import React from 'react';
import Head from 'next/head';
import Nav from '../components/Nav';
import genTitle from '../utils/genTitle';
import confetti from 'canvas-confetti';
import Toast from '../components/Toast';
import toBinary from '../utils/toBinary';

export default function Home() {
	return (
		<>
			<Head>
				<title>{genTitle('Home')}</title>
			</Head>

			<canvas id="confetti-canvas" className="absolute sm:bottom-5 sm:left-5 w-4/5 h-4/5"></canvas>

			<div className="absolute bg-white dark:bg-gray-800 dark:text-white sm:rounded-lg border dark:border-none bottom-0 sm:left-5 sm:bottom-5 shadow-xl flex flex-col justify-center items-start py-7 sm:py-6 px-7 z-10">
				<Nav />
				<h1
					className="text-6xl pb-2 font-extrabold border-yellow-400 border-8 border-t-0 border-l-0 border-r-0 cursor-pointer"
					onClick={() => {
						confetti({ particleCount: 100, spread: 70, origin: { y: 0.9, x: 0.2 } });
					}}
				>
					Hello, I'm Ismaeel.
				</h1>
			</div>
		</>
	);
}
