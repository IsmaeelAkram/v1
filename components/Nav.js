import Link from 'next/link';

const pages = [
	{ path: '/about', name: 'About' },
	{ path: '/writing', name: 'Writing' },
	{ path: '/projects', name: 'Projects' },
];

export default function Nav() {
	return (
		<div className="flex flex-row mb-2">
			{pages.map((page) => {
				return (
					<div
						className="rounded-sm mr-3 p-1 hover:bg-gray-100 dark:hover:bg-gray-900 transition"
						key={page.name}
					>
						<Link href={page.path}>{page.name}</Link>
					</div>
				);
			})}
		</div>
	);
}
