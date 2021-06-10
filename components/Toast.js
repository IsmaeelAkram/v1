import React, { useState } from 'react';

export default function Toast() {
	const [toastText, setToastText] = useState('');
	const [toastVisible, setToastVisible] = useState(false);

	function show(x) {
		setToastVisible(true);
		setToastText(x);
		setTimeout(() => setToastVisible(false), 2000);
		setTimeout(() => setToastText(''), 2200);
	}

	return (
		<div
			className={`dark:bg-gray-800 dark:text-white transition duration-200 absolute border dark:border-none bottom-5 right-5 rounded-md shadow-md py-2 px-7 ${
				toastVisible ? 'opacity-100' : 'opacity-0'
			}`}
		>
			<span>{toastText}</span>
		</div>
	);
}
