import jive from "./assets/jive_linkedin.jpg";
import Maria from "./assets/Mariia.jpg";
import Vishal from "./assets/Vishal-001.jpg";
import Matt from "./assets/Matt.jpeg";

function StaffColumns() {
	return (
		<section id="team" className="container mx-auto px-12 py-16">
			<h1 className="w-full text-center text-4xl font-extrabold md:mx-auto md:w-4/5">
				<span>The</span> <span className="text-cyan-500">Team</span>
			</h1>
			<div className="flex w-full flex-col justify-between rounded-lg bg-white py-8 px-6 text-center text-slate-800 shadow-lg shadow-slate-200 transition ">
				<div className="flex flex-col justify-between h-full w-full text-center text-sm border border-solid my-8">
					<div>
						<img
							alt="Image of Dr Julia Ive"
							className="mx-auto mb-8 h-32 w-32 mt-8 object-cover rounded-full"
							src={jive}
						/>
						<p className="mb-6 leading-relaxed text-slate-500">
							Dr Julia Ive is the lab lead and an expert in guiding foundation
							models for text generation with Reinforcement Learning (RL). Her
							track record includes a major scientific breakthrough in the
							domain of generating synthetic mental health text. She pioneered
							this in 2018 as a result of her pilot project with her colleagues
							from Kings College London, Cambridge and Oxford. The methodology
							stemming from the project was published in the prestigious
							high-rank Nature Digital Medicine journal. At Queen Mary
							University of London (QMUL), she has been the module organiser of
							the Artificial Intelligence course at MSc level. She has taught
							Neural Networks and Natural Language Processing both at Imperial
							College London, with Prof Lucia Specia, and at the Department of
							Computing at Queen Mary University of London. Beyond teaching for
							university students she has developed and delivered a series of
							courses for pre-university level students (18-19 years, Oxford
							summer courses), as well as industry practitioners; for example
							the{" "}
							<a
								href="https://github.com/alan-turing-institute/Building-transparent-AI-Systems-course"
								target="blank"
								rel="noopener noreferrer"
							></a>{" "}
							online ResponsibleAI course at The Alan Turing Institute.
						</p>
					</div>

					<div>
						<div className="font-bold text-slate-600 p-4 mb-4">
							<a
								href="https://julia-ive.github.io"
								target="blank"
								rel="no opener noreferrer"
							>
								Dr Julia Ive
							</a>
						</div>
					</div>
				</div>
			</div>
			<div className="flex flex-col space-y-6 md:flex-row md:space-y-0">
				<div className="flex w-full flex-col justify-between rounded-lg bg-white py-8 px-6 text-center text-slate-800 shadow-lg shadow-slate-200 transition ">
					<div className="flex flex-col justify-between h-full w-full text-center text-sm">
						<div>
							<img
								alt="Picture of Mariia Ignashina"
								className="mx-auto mb-8 h-32 w-32 mt-8 rounded-full"
								src={Maria}
							/>
							<p className="mb-6 leading-relaxed text-slate-500 ">
								Mariia has a Master of Science with Distinction in Computer
								Science, Queen Mary University of London, and a Bachelor of
								Science in Natural Language Processing, Higher School of
								Economics University.
							</p>
						</div>

						<div>
							<div className="font-bold text-slate-600">Mariia Ignashina</div>
							{/* <div className="text-xs text-slate-400">Lorem Ipsum</div> */}
						</div>
					</div>
				</div>

				<div className="flex w-full flex-col justify-between rounded-lg bg-white py-8 px-6 text-center text-slate-800 shadow-lg shadow-slate-200 transition ">
					<div className="flex flex-col justify-between h-full w-full text-center text-sm">
						<div>
							<img
								alt="Hanging out with friends"
								className="mx-auto mb-8 h-32 w-32 mt-8 object-cover rounded-full"
								src={Matt}
							/>
							<p className="mb-6 leading-relaxed text-slate-500">
								Mateusz has a Bachelor in Electronic & Electrical Engineering,
								University College London, and is studying towards a PhD in
								Electronic Engineering, Queen Mary University of London. He is
								currently working on Zero shot text anonymisation using large
								language models, open ended search to generate prompts, and
								alignment of foundation models.
							</p>
						</div>

						<div>
							<div className="font-bold text-slate-600">Mateusz Dziemian</div>
							{/* <div className="text-xs text-slate-400">Lorem ipsum</div> */}
						</div>
					</div>
				</div>

				<div className="flex w-full flex-col justify-between rounded-lg bg-white py-8 px-6 text-center text-slate-800 shadow-lg shadow-slate-200 transition ">
					<div className="flex flex-col justify-between h-full w-full text-center text-sm">
						<div>
							<img
								alt="Hanging out with friends"
								className="mx-auto mb-8 h-32 w-32 object-cover rounded-full mt-8"
								src={Vishal}
							/>
							<p className="mb-6 leading-relaxed text-slate-500">
								Vishal has a Masters in Artificial Intelligence in Computer
								Vision and Robotics with Distinction, and a Bachelors in
								Computer Science from RGPV University India. He is currently
								working on Identifying and mitigating bias in EHRs using
								generative AI, Tracking progress in Cognitive behaviour therapy
								in subject to physical activity / exercises, and Understanding
								the relationship between Understanding privacy and its impact on
								chatbots.
							</p>
						</div>

						<div>
							<div className="font-semibold text-slate-600">Vishal Yadav</div>
							{/* <div className="text-xs text-slate-400">Lorem Ipsum</div> */}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default StaffColumns;
