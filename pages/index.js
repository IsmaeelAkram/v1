import Head from 'next/head';
import Nav from '../components/Nav';
import genTitle from '../utils/genTitle';
import confetti from 'canvas-confetti';

import { HeaderContainer, Title } from '../styles/home';

export default function Home() {
	return (
		<>
			<Head>
				<title>{genTitle('Home')}</title>
			</Head>

			<canvas id="confetti-canvas" className="absolute bottom-5 left-5 w-4/5 h-4/5"></canvas>

			<HeaderContainer>
				<Nav />
				<div className="cursor-pointer">
					<Title
						onClick={() => {
							confetti({ particleCount: 100, spread: 70, origin: { y: 0.9, x: 0.2 } });
						}}
					>
						Hey, I'm Ismaeel.
					</Title>
				</div>
			</HeaderContainer>
		</>
	);
}
