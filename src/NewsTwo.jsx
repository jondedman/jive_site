import promiseAi from "./assets/promiseAi.jpeg";
import structures from "./assets/joel-filipe-unsplash.jpg";
import bias from "./assets/mitigating_bias.png";

function NewsTwo() {
	return (
		<section className="py-12 mt-2 ">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="flex justify-center  gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
					<div className="group w-full max-lg:max-w-xl lg:w-1/3 border border-gray-300 rounded-2xl">
						<div className="flex items-center">
							<img
								src={structures}
								alt="Photo by Joel Filipe on Unsplash"
								className="rounded-t-2xl h-60 w-full"
							/>
						</div>
						<div className="p-4 lg:p-6 transition-all duration-300 rounded-b-2xl group-hover:bg-gray-50">
							<span className="text-cyan-500 font-medium mb-3 block">
								April 22, 2024
							</span>
							<h4 className="text-xl text-gray-900 font-medium leading-8 mb-5">
								What will we be saying about AI in ten years’ time?
							</h4>
							<p className="text-gray-500 leading-6 mb-10">
								Dr Ive and Professor Gianluca Sergi, Professor in Film Studies
								and the Director of the Institute for Screen Research Industries
								at the University of Nottingham, will be discussing what crisis
								points may have emerged recently and what AI governance
								structures might look like.
							</p>
						</div>
					</div>
					<div className="group w-full max-lg:max-w-xl lg:w-1/3 border border-gray-300 rounded-2xl">
						<div className="flex items-center">
							<img
								src={promiseAi}
								alt="blogs tailwind section"
								className="rounded-t-2xl w-full h-60"
							/>
						</div>
						<div className="p-4 lg:p-6 transition-all duration-300 rounded-b-2xl group-hover:bg-gray-50">
							<span className="text-cyan-500 font-medium mb-3 block">
								April 18, 2024
							</span>
							<h4 className="text-xl text-gray-900 font-medium leading-8 mb-5">
								The promise of AI: working across disciplines for the public
								good
							</h4>
							<p className="text-gray-500 leading-6 mb-10">
								Dr Julia Ive will be presenting a seminar at the event. With{" "}
								<a
									className="underline text-cyan-500"
									href="https://www.turing.ac.uk/people/researchers/david-leslie"
									rel="noopener noreferrer"
									target="_blank"
								>
									{" "}
									David Leslie
								</a>{" "}
								and{" "}
								<a
									className="underline text-cyan-500"
									href="https://www.qmul.ac.uk/busman/staff/academic/profiles/cruxeni.html"
									rel="noopener noreferrer"
									target="_blank"
								>
									Dr Isadora Cruxen
								</a>{" "}
								at Queen Mary University of London
							</p>
							<a
								className="cursor-pointer text-lg text-cyan-500 font-semibold"
								href="https://www.eventbrite.co.uk/e/the-promise-of-ai-working-across-disciplines-for-the-public-good-tickets-848336065007"
								rel="noopener noreferrer"
								target="_blank"
							>
								Read more..
							</a>
						</div>
					</div>

					<div className="group w-full max-lg:max-w-xl lg:w-1/3 border border-gray-300 rounded-2xl">
						<div className="flex items-center">
							<img
								src={bias}
								alt="Mitigating bias poster"
								className="rounded-t-2xl h-60 w-full"
							/>
						</div>
						<div className="p-4 lg:p-6 transition-all duration-300 rounded-b-2xl group-hover:bg-gray-50">
							<span className="text-cyan-500 font-medium mb-3 block">
								Mar 28, 2024
							</span>
							<h4 className="text-xl text-gray-900 font-medium leading-8 mb-5">
								Mental Health Monitoring workshop
							</h4>
							<p className="text-gray-500 leading-6 mb-10">
								Julia & Vishal presented the poster at AI for Mental Health
								Monitoring workshop at the{" "}
								<a
									className="underline text-cyan-500"
									href="https://turing-ds4mh.github.io/aiuk2024.html"
									rel="noopener noreferrer"
									target="_blank"
								>
									Fringe Event of Alan Turing Institute
								</a>
							</p>
							<a
								className="cursor-pointer text-lg text-cyan-500 font-semibold"
								href="src/assets/AT-poster-jive.pdf"
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
export default NewsTwo;
