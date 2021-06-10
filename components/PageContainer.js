import { motion } from 'framer-motion';
import Nav from './Nav';

export default function PageContainer({ children, title }) {
	return (
		<motion.div
			className="sm:m-10 bg-white dark:bg-gray-800 dark:text-white sm:rounded-lg border dark:border-none shadow-xl flex flex-col justify-center items-start py-3 sm:py-7 px-4 sm:px-7 z-10"
			initial={{ opacity: 0.5 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5 }}
		>
			<Nav />
			<h1 className="text-6xl font-extrabold mb-5 mt-2">{title}</h1>
			{children}
		</motion.div>
	);
}
