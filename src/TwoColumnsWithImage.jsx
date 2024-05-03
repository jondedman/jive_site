import conferenceImage from "./assets/conference1.jpeg";
// const benefits = [
// 	"Various types of coffee beans",
// 	"Coworking area",
// 	"Meeting room",
// ];

export default function TwoColumnsWithImage() {
	return (
		<section className="container mx-auto flex flex-col items-center px-8 py-36 sm:flex-row-reverse sm:px-12">
			<div className="mb-8 w-full sm:mb-0 sm:w-1/2 sm:pl-4 md:pl-16">
				<img
					alt="Conference in Padua, Italy"
					className="rounded-lg sm:rounded-br-[80px] sm:rounded-tl-[120px]"
					src={conferenceImage}
				/>
			</div>
			<div className="mr-4 w-full text-center sm:w-1/2 sm:text-left">
				<h1 className="mb-6 text-3xl font-bold leading-tight dark:text-slate-50 md:text-4xl">
					Our team is working on ethical aspects of human-AI collaboration, such
					as bias, privacy and transparency.
				</h1>
				<p className="mb-2 leading-relaxed text-slate-700 dark:text-slate-400">
					We are focusing on developing text rewriting techniques that
					normalise, de-bias and de-identify text to build responsible AI models
					that will protect sensitive information of individuals. This includes
					Reinforcement Learning (RL) methods applied to Large Language Models
					(LLMs). Such models could serve as digital twins to monitor and
					improve mental health of vulnerable individuals. We also work on
					transparency of our models conveying their decisions in collaborative
					protocols via reporting uncertainty and bias estimates. This includes
					Bayesian Deep Learning techniques. We also work with integration of
					LLMs into agents in language acquisition problems, educational and
					healthcare contexts. Beyond mental health, we also work with legal
					data.
				</p>
				{/* <ul className="mb-8 flex flex-col items-center space-y-1 dark:text-slate-400 sm:items-start">
					{benefits.map((benefit, index) => (
						<li className="flex items-end" key={index}>
							<span className="mr-2 text-orange-300">&#10003;</span>
							<span>{benefit}</span>
						</li>
					))}
				</ul> */}
				<div className="flex flex-col space-y-3 md:flex-row md:space-x-2 md:space-y-0">
					<button className="rounded-lg border-0 bg-slate-900 px-6 py-3 text-base text-white shadow-lg shadow-slate-300 transition hover:bg-orange-300 hover:text-slate-900 hover:shadow-orange-300 dark:bg-orange-300 dark:text-black dark:shadow-sm dark:shadow-orange-300 dark:hover:bg-orange-400 sm:py-2">
						Possible Button 1
					</button>
					<button className="rounded-lg border-0 bg-white px-6 py-3 text-base text-slate-900 shadow-lg shadow-slate-100 transition hover:bg-orange-300 hover:text-slate-900 hover:shadow-orange-300 dark:bg-slate-700 dark:text-slate-300 dark:shadow-sm dark:shadow-slate-800 dark:hover:bg-slate-600 sm:py-2">
						Possible Button 2
					</button>
				</div>
			</div>
		</section>
	);
}
