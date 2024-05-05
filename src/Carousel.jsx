import { useState, useEffect, useCallback } from "react";
// import { ChevronLeft, ChevronRight } from "react-feather"

import PropTypes from "prop-types";

const Carousel = ({
	children: slides,
	autoSlide = false,
	autoSlideInterval = 3000,
}) => {
	const [curr, setCurr] = useState(0);

	const prev = () =>
		setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));

	const next = useCallback(() => {
		setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
	}, [slides]);

	useEffect(() => {
		if (!autoSlide) return;
		const slideInterval = setInterval(next, autoSlideInterval);
		return () => clearInterval(slideInterval);
	}, [autoSlide, autoSlideInterval, next]);

	return (
		<div id="videos" className="relative w-full h-full mb-2">
			<h1 className="w-full text-center text-4xl font-extrabold md:mx-auto md:w-4/5 mb-4">
				<span className="text-cyan-500">V</span>
				<span>ideos</span>
			</h1>
			<div className="overflow-hidden">
				<div
					className="flex transition-transform ease-out duration-500"
					style={{ transform: `translateX(-${curr * 100}%)` }}
				>
					{slides}
				</div>
				<div className="absolute bottom-60 left-4 right-4 flex items-center justify-between">
					<button
						onClick={prev}
						className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-6 h-6"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M15.75 19.5 8.25 12l7.5-7.5"
							/>
						</svg>
					</button>
					<button
						onClick={next}
						className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-6 h-6"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="m8.25 4.5 7.5 7.5-7.5 7.5"
							/>
						</svg>
					</button>
				</div>
			</div>
			<div className="absolute bottom-4 right-0 left-0">
				<div className="flex items-center justify-center gap-2">
					{slides.map((s, i) => (
						<div
							key={i}
							className={`transition-all w-1.5 h-1.5 bg-black rounded-full  ${
								curr === i ? "p-0.5" : "bg-opacity-50"
							}`}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

Carousel.propTypes = {
	children: PropTypes.arrayOf(PropTypes.element).isRequired,
	autoSlide: PropTypes.bool,
	autoSlideInterval: PropTypes.number,
};

export default Carousel;
