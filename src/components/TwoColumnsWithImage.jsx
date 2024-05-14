import Team from "../assets/Team.png";

function TwoColumnsWithImage() {
	return (
		<section className="container mx-auto flex flex-col items-center px-8 py-36 sm:flex-row-reverse sm:px-12">
			<div className="mb-8 w-full sm:mb-0 sm:w-1/2 sm:pl-4 md:pl-16">
				<img
					alt="Conference in Padua, Italy"
					className="rounded-lg sm:rounded-br-[80px] sm:rounded-tl-[120px]"
					src={Team}
				/>
			</div>
			<div className="mr-4 w-full text-center sm:w-1/2 sm:text-left">
				<h1 className="mb-6 text-3xl font-bold leading-tight md:text-4xl">
					The JIVE team is working on ethical aspects of human-AI collaboration,
					such as bias, privacy and transparency.
				</h1>
				<p className="mb-2 leading-relaxed">
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
			</div>
		</section>
	);
}

export default TwoColumnsWithImage;
