import gold from "../assets/gold.jpg";
import MariiaPoster from "../assets/MariiaPoster.jpeg";

function NewsThree() {
	return (
		<section className="py-12 mb-12 ">
			<div id="news" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="flex justify-center  gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
					<div className="group w-full max-lg:max-w-xl lg:w-1/3 border border-gray-300 rounded-2xl">
						<div className="flex items-center">
							<img
								src={MariiaPoster}
								alt="Mariia in front of the poster"
								className="rounded-t-2xl w-full h-60 object-cover"
							/>
						</div>
						<div className="p-4 lg:p-6 transition-all duration-300 rounded-b-2xl group-hover:bg-gray-50">
							<span className="text-cyan-500 font-medium mb-3 block">
								21-22 March, 2024
							</span>
							<h4 className="text-xl text-gray-900 font-medium leading-8 mb-5">
								Artificial Intelligence in Healthcare: Shaping the Future of
								Science (AI4H) Conference, University of Padua, Padova, Italy
							</h4>
							<p className="text-gray-500 leading-6 mb-10">
								Dr Julia Ive and Mariia present the poster for Mitigating Bias
								in Pediatric Mental Health Notes via rewriting.
							</p>
							<a
								className="cursor-pointer text-lg text-cyan-500 font-semibold"
								href="https://ai4h.unipd.it/home/posters/"
								rel="noopener noreferrer"
								target="_blank"
							>
								Read more..
							</a>
						</div>
					</div>

					{/* <div className="group w-full max-lg:max-w-xl lg:w-1/3 border border-gray-300 rounded-2xl">
						<div className="flex items-center">
							<img
								src={gold}
								alt="picture of gold blur"
								className="rounded-t-2xl h-60 w-full"
							/>
						</div>
						<div className="p-4 lg:p-6 transition-all duration-300 rounded-b-2xl group-hover:bg-gray-50">
							<span className="text-cyan-500 font-medium mb-3 block">
								Mar 18, 2024
							</span>
							<h4 className="text-xl text-gray-900 font-medium leading-8 mb-5">
								AI Ethics and Regulations
							</h4>
							<p className="text-gray-500 leading-6 mb-10">
								Dr Julia Ive is a panel speaker at the joint event between Queen
								Mary Global Policy Institute, the Society for Computers and Law,
								and The World Bank.
							</p>
							<a
								className="cursor-pointer text-lg text-cyan-500 font-semibold"
								href="https://www.youtube.com/watch?v=w6HUFTcHfPg"
								rel="noopener noreferrer"
								target="_blank"
							>
								Read more..
							</a>
						</div>
					</div> */}

					<div className="group w-full max-lg:max-w-xl lg:w-1/3 border border-gray-300 rounded-2xl">
						<div className="flex items-center">
							<img
								src={gold}
								alt="picture of gold blur"
								className="rounded-t-2xl h-60 w-full"
							/>
						</div>
						<div className="p-4 lg:p-6 transition-all duration-300 rounded-b-2xl group-hover:bg-gray-50">
							<span className="text-cyan-500 font-medium mb-3 block">
								Mar 18, 2024
							</span>
							<h4 className="text-xl text-gray-900 font-medium leading-8 mb-5">
								Regulating AI in Digital Mental Health Forum
							</h4>
							<p className="text-gray-500 leading-6 mb-10">
								{" "}
								Dr Julia Ive will be speaking at the Regulating AI in Digital
								Mental Health Forum, AI Turing Fringe Event.
							</p>
							<a
								className="cursor-pointer text-lg text-cyan-500 font-semibold"
								href="https://events.bizzabo.com/576079/agenda/speakers/3223878"
								rel="noopener noreferrer"
								target="_blank"
							>
								Read more..
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
export default NewsThree;
