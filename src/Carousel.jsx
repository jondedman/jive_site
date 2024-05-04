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
		<div className="relative w-full h-full">
			<div className="overflow-hidden">
				<div
					className="flex transition-transform ease-out duration-500"
					style={{ transform: `translateX(-${curr * 100}%)` }}
				>
					{slides}
				</div>
				<div className="absolute bottom-48 -left-4 -right-4 flex items-center justify-between">
					<button
						onClick={prev}
						className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
					>
						left
						{/* <ChevronLeft /> */}
					</button>
					<button
						onClick={next}
						className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
					>
						right
						{/* <ChevronRight /> */}
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
