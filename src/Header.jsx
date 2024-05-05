import { useState } from "react";

function Header() {
	const [isMenuOpen, setMenuOpen] = useState(false);
	return (
		<header className="container mx-auto flex w-full items-center justify-between py-4 px-6 fixed top-0 z-10">
			<a href="#">
				<div className="w-full text-center text-lg font-extrabold sm:w-fit sm:text-left">
					<span className="text-cyan-500">J</span>
					<span className="text-slate-800">IVE</span>
				</div>
			</a>
			<nav className="hidden bg-white text-md sm:block">
				<ul
					className="flex items
        -center space-x-2"
				>
					<li className="group relative">
						<a
							className="block whitespace-nowrap px-2 py-2 text-md text-slate-600 no-underline transition hover:text-slate-900"
							href="/"
						>
							Home
						</a>
					</li>
					<li className="group relative">
						<a
							className="block whitespace-nowrap px-2 py-2 text-md text-slate-600 no-underline transition hover:text-slate-900"
							href="#publications"
						>
							Publications
						</a>
						{/* <ul className="invisible absolute z-30 space-y-2 rounded-lg border border-slate-50 bg-white p-4 opacity-0 shadow-xl transition-opacity delay-75 ease-in-out group-hover:visible group-hover:opacity-100 dark:border-slate-800 dark:bg-slate-900">
							<li>
								<a
									className="undefined block whitespace-nowrap px-2 py-2 text-sm text-slate-600 no-underline transition hover:text-slate-900 "
									href="#"
								>
									Publication 1
								</a>
							</li>
							<li>
								<a
									className="undefined block whitespace-nowrap px-2 py-2 text-sm text-slate-600 no-underline transition hover:text-slate-900 dark:hover:text-slate-50"
									href="#"
								>
									Publication 2
								</a>
							</li>
							<li>
								<a
									className="undefined block whitespace-nowrap px-2 py-2 text-sm text-slate-600 no-underline transition hover:text-slate-900 dark:hover:text-slate-50"
									href="#"
								>
									Publication 3
								</a>
							</li>
							<li>
								<a
									className="undefined block whitespace-nowrap px-2 py-2 text-sm text-slate-600 no-underline transition hover:text-slate-900 dark:hover:text-slate-50"
									href="#"
								>
									Publication 4
								</a>
							</li>
						</ul> */}
					</li>
					<li className="group relative">
						<a
							className="block whitespace-nowrap px-2 py-2 text-md text-slate-600 no-underline transition hover:text-slate-900"
							href="#news"
						>
							News
						</a>
					</li>
					<li className="group relative">
						<a
							className="block whitespace-nowrap px-2 py-2 text-md text-slate-600 no-underline transition hover:text-slate-900"
							href="https://scholar.google.com/citations?view_op=list_works&hl=en&hl=en&user=WMYcG5EAAAAJ&sortby=pubdate"
							target="_blank"
							rel="noopener noreferrer"
						>
							Google Scholar
						</a>
					</li>

					<li className="group relative">
						<a
							className="block whitespace-nowrap px-2 py-2 text-md text-slate-600 no-underline transition hover:text-slate-900"
							href="/contact"
						>
							<a href="mailto:j.ive@qmul.ac.uk">j.ive@qmul.ac.uk</a>
						</a>
					</li>
					<li className="group relative">
						<a
							className="block whitespace-nowrap px-2 py-2 text-md text-slate-600 no-underline transition hover:text-slate-900"
							href="#team"
						>
							Team
						</a>
					</li>
				</ul>
			</nav>
			<button
				className="block text-slate-600 hover:text-slate-900 sm:hidden"
				title="Open navigation menu"
				onClick={() => setMenuOpen(!isMenuOpen)}
			>
				<svg
					preserveAspectRatio="xMidYMid meet"
					viewBox="0 0 24 24"
					width="1.2em"
					height="1.2em"
				>
					<path
						fill="none"
						stroke="currentColor"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M4 6h16M4 12h16M4 18h16"
					></path>
				</svg>
			</button>
			{/* <nav className="fixed -right-2/3 top-0 z-20 h-full w-2/3 transform overflow-y-auto bg-white py-4 text-base transition dark:bg-slate-900 sm:hidden"> */}
			{isMenuOpen && (
				<div
					className="fixed top-0 left-0 z-10 h-full w-full bg-slate-900 opacity-70 sm:hidden"
					onClick={() => setMenuOpen(false)}
				></div>
			)}
			<nav
				className={`
        bg-white text-base
        transition transform -right-1/2 fixed top-0 z-20 h-full w-1/2 overflow-y-auto py-4 sm:hidden -translate-x-full shadow-2xl
      ${isMenuOpen ? "" : "-right-full transform"}`}
			>
				<ul className="flex flex-col space-y-2">
					<li className="text-right">
						<button
							className="px-6 py-2 text-slate-600 hover:text-slate-900 "
							onClick={() => setMenuOpen(!isMenuOpen)}
						>
							<svg
								preserveAspectRatio="xMidYMid meet"
								viewBox="0 0 24 24"
								width="1.2em"
								height="1.2em"
							>
								<path
									fill="none"
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M5 12h14m-4 4l4-4m-4-4l4 4"
								></path>
							</svg>
						</button>
					</li>
					<li className="group relative w-full overflow-x-visible text-right">
						<a
							className="mx-4 block
            whitespace-nowrap px-2 py-2 text-sm text-slate-600 no-underline transition hover:text-slate-900"
							href="/"
						>
							Home
						</a>
					</li>
					<li className="group relative w-full overflow-x-visible text-right">
						<a
							className="mx-4 block
            whitespace-nowrap px-2 py-2 text-sm text-slate-600 no-underline transition hover:text-slate-900 "
							href="#publications"
						>
							Publications
						</a>
						{/* <ul className="h-0 space-y-2 overflow-y-hidden bg-slate-50 px-4 py-0 transition-all delay-75 ease-in-out group-hover:h-full group-hover:py-4 ">
							<li>
								<a
									className="undefined block whitespace-nowrap px-2 py-2 text-sm text-slate-600 no-underline transition hover:text-slate-900 "
									href="#"
								></a>
							</li>
							<li>
								<a
									className="undefined block whitespace-nowrap px-2 py-2 text-sm text-slate-600 no-underline transition hover:text-slate-900 "
									href="#"
								>
									Publication 1
								</a>
							</li>
							<li>
								<a
									className="undefined block whitespace-nowrap px-2 py-2 text-sm text-slate-600 no-underline transition hover:text-slate-900 "
									href="#"
								>
									Publication 2
								</a>
							</li>
							<li>
								<a
									className="undefined block whitespace-nowrap px-2 py-2 text-sm text-slate-600 no-underline transition hover:text-slate-900 "
									href="#"
								>
									Publication 3
								</a>
							</li>
						</ul> */}
					</li>
					<li className="group relative w-full overflow-x-visible text-right">
						<a
							className="mx-4 block
            whitespace-nowrap px-2 py-2 text-sm text-slate-600 no-underline transition hover:text-slate-900 "
							href="#news"
						>
							News
						</a>
					</li>
					<li className="group relative w-full overflow-x-visible text-right">
						<a
							className="mx-4 block
						whitespace-nowrap px-2 py-2 text-sm text-slate-600 no-underline transition hover:text-slate-900"
							href="https://scholar.google.com/citations?view_op=list_works&hl=en&hl=en&user=WMYcG5EAAAAJ&sortby=pubdate"
							target="_blank"
							rel="noopener noreferrer"
						>
							Google Scholar
						</a>
					</li>
					<li className="group relative w-full overflow-x-visible text-right">
						<a
							className="mx-4 block
            whitespace-nowrap px-2 py-2 text-sm text-slate-900 no-underline transition hover:text-slate-900"
							href="#"
						>
							<a href="mailto:j.ive@qmul.ac.uk">j.ive@qmul.ac.uk</a>
						</a>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;
