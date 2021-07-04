import React from 'react';
import Head from 'next/head';
import Nav from '../components/Nav';
import genTitle from '../utils/genTitle';
import confetti from 'canvas-confetti';
import { motion } from 'framer-motion';

export default function Home() {
	return (
		<>
			<Head>
				<title>{genTitle('Home')}</title>
			</Head>

			<canvas id="confetti-canvas" className="absolute sm:bottom-5 sm:left-5 w-4/5 h-4/5"></canvas>

			<motion.div
				className="absolute bg-white dark:bg-gray-800 dark:text-white sm:rounded-lg border dark:border-none top-0 sm:left-5 sm:top-5 shadow-xl flex flex-col justify-center items-start py-7 sm:py-6 px-7 z-10"
				initial={{ x: -50, opacity: 0.5 }}
				animate={{ x: 0, opacity: 1 }}
				transition={{ duration: 0.5 }}
			>
				<Nav />
				<h1
					className="text-6xl pb-2 font-extrabold border-yellow-400 border-8 border-t-0 border-l-0 border-r-0 cursor-pointer"
					onClick={() => {
						confetti({
							particleCount: 200,
							spread: 100,
							origin: { y: 0.15, x: 0.05 },
							angle: -40,
							disableForReducedMotion: true,
						});
					}}
				>
					Hello, I'm Ismaeel.
				</h1>
			</motion.div>
		</>
	);
}
