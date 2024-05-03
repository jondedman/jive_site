// import { useRef, useEffect } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css"; // Import Swiper CSS
// import { Navigation, SwiperCore } from "swiper/modules";

// // Use SwiperCore modules
// SwiperCore.use([Navigation]);

// function News() {
// 	const swiperElRef = useRef(null);

// 	useEffect(() => {
// 		swiperElRef.current.addEventListener("swiperprogress", (e) => {
// 			const [swiper, progress] = e.detail;
// 			console.log(progress);
// 		});

// 		swiperElRef.current.addEventListener("swiperslidechange", () => {
// 			console.log("slide changed");
// 		});
// 	}, []);

// 	return (
// 		<section className="py-24">
// 			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
// 				<div className="flex justify-center flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between gap-8">
// 					<div className="w-full flex justify-between flex-col lg:w-2/5">
// 						<div className="block lg:text-left text-center">
// 							<h2 className="text-4xl font-bold text-gray-900 leading-[3.25rem] mb-5">
// 								Our latest <span className=" text-indigo-600">blogs</span>
// 							</h2>
// 							<p className="text-gray-500 mb-10  max-lg:max-w-xl max-lg:mx-auto">
// 								Welcome to our blog section, where knowledge meets inspiration.
// 								Explore insightful articles, expert tips, and the latest trends
// 								in our field.
// 							</p>
// 							<a
// 								href="javascript:;"
// 								className="cursor-pointer border border-gray-300 shadow-sm rounded-full py-3.5 px-7 w-52 lg:mx-0 mx-auto flex justify-center text-gray-900 font-semibold transition-all duration-300 hover:bg-gray-100"
// 							>
// 								View All
// 							</a>
// 						</div>
// 						<div className="swiper-navigation flex items-center lg:justify-start justify-center lg:mt-0 mt-8 gap-8 mb-4">
// 							{/* Swiper navigation buttons */}
// 							<button
// 								className="swiper-button-prev group flex justify-center items-center border border-solid border-indigo-600 w-11 h-11 transition-all duration-500 rounded-full hover:bg-indigo-600 swiper-button-prev"
// 								data-carousel-prev
// 							>
// 								<svg
// 									className="h-6 w-6 text-indigo-600 group-hover:text-white"
// 									viewBox="0 0 24 24"
// 									fill="none"
// 									xmlns="http://www.w3.org/2000/svg"
// 								>
// 									{/* Previous button SVG */}
// 								</svg>
// 							</button>
// 							<button
// 								className="swiper-button-next group flex justify-center items-center border border-solid border-indigo-600 w-11 h-11 transition-all duration-500 rounded-full hover:bg-indigo-600 swiper-button-next"
// 								data-carousel-next
// 							>
// 								<svg
// 									className="h-6 w-6 text-indigo-600 group-hover:text-white"
// 									viewBox="0 0 24 24"
// 									fill="none"
// 									xmlns="http://www.w3.org/2000/svg"
// 								>
// 									{/* Next button SVG */}
// 								</svg>
// 							</button>
// 						</div>
// 					</div>
// 					<div className="w-full lg:w-3/5">
// 						<Swiper
// 							ref={swiperElRef}
// 							slidesPerView={2}
// 							spaceBetween={28}
// 							centeredSlides={false}
// 							loop={true}
// 							navigation={{
// 								prevEl: ".swiper-button-prev",
// 								nextEl: ".swiper-button-next",
// 							}}
// 							breakpoints={{
// 								0: {
// 									slidesPerView: 1,
// 									spaceBetween: 20,
// 									centeredSlides: false,
// 								},
// 								568: {
// 									slidesPerView: 2,
// 									spaceBetween: 28,
// 									centeredSlides: false,
// 								},
// 								768: {
// 									slidesPerView: 2,
// 									spaceBetween: 28,
// 									centeredSlides: false,
// 								},
// 								1024: { slidesPerView: 2, spaceBetween: 32 },
// 							}}
// 							className="mySwiper"
// 						>
// 							<SwiperSlide>{/* Your slide content goes here */}</SwiperSlide>
// 							<SwiperSlide>{/* Your slide content goes here */}</SwiperSlide>
// 							{/* Add more SwiperSlide components as needed */}
// 						</Swiper>
// 					</div>
// 				</div>
// 			</div>
// 		</section>
// 	);
// }

// export default News;
