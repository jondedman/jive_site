import jive from "./assets/jive_linkedin.jpg";
import Maria from "./assets/Mariia.jpg";
import Vishal from "./assets/Vishal-001.jpg";
import Matt from "./assets/Matt.jpeg";

function StaffColumns() {
	return (
		<section className="container mx-auto px-12 py-28">
			<h1 className="mb-24 w-full text-center text-4xl font-extrabold dark:text-slate-50 md:mx-auto md:mb-24 md:w-4/5">
				<span className="dark:text-slate-400">The</span>{" "}
				<span className="text-cyan-500">Team</span>
			</h1>
			<div className="flex flex-col space-y-6 md:flex-row md:space-y-0">
				<div className="flex w-full flex-col justify-between rounded-lg bg-white py-8 px-6 text-center text-slate-800 shadow-lg shadow-slate-200 transition dark:bg-slate-800 dark:shadow-slate-800">
					<div className="flex flex-col justify-between h-full w-full text-center text-sm">
						<div>
							<img
								alt="Picture of Mariia Ignashina"
								className="mx-auto mb-8 h-32 w-32 mt-8 rounded-full"
								src={Maria}
							/>
							<p className="mb-6 leading-relaxed text-slate-500 dark:text-slate-400">
								Mariia has a Master of Science with Distinction in Computer
								Science, Queen Mary University of London, and a Bachelor of
								Science in Natural Language Processing, Higher School of
								Economics University. She is currently working on mapping PHQ-9
								questions to clinical notes of Cincinnati Childrens Hospital
								patients, Identifying and eliminating potential bias in the
								clinical notes of depressive patients, and Safe training with
								sensitive in-domain data.
							</p>
						</div>

						<div>
							<div className="font-semibold text-slate-600">
								Mariia Ignashina
							</div>
							<div className="text-xs text-slate-400">Lorem Ipsum</div>
						</div>
					</div>
				</div>

				<div className="flex w-full flex-col justify-between rounded-lg bg-white py-8 px-6 text-center text-slate-800 shadow-lg shadow-slate-200 transition dark:bg-slate-800 dark:shadow-slate-800">
					<div className="flex flex-col justify-between h-full w-full text-center text-sm">
						<div>
							<img
								alt="Hanging out with friends"
								className="mx-auto mb-8 h-32 w-32 mt-8 object-cover rounded-full"
								src={Matt}
							/>
							<p className="mb-6 leading-relaxed text-slate-500 dark:text-slate-400">
								Mateusz has a Bachelor in Electronic & Electrical Engineering,
								University College London, and is studying towards a PhD in
								Electronic Engineering, Queen Mary University of London. He is
								currently working on Zero shot text anonymisation using large
								language models, open ended search to generate prompts, and
								alignment of foundation models.
							</p>
						</div>

						<div>
							<div className="font-semibold text-slate-600">
								Mateusz Dziemian
							</div>
							<div className="text-xs text-slate-400">Lorem ipsum</div>
						</div>
					</div>
				</div>

				<div className="flex w-full flex-col justify-between rounded-lg bg-white py-8 px-6 text-center text-slate-800 shadow-lg shadow-slate-200 transition dark:bg-slate-800 dark:shadow-slate-800">
					<div className="flex flex-col justify-between h-full w-full text-center text-sm">
						<div>
							<img
								alt="Hanging out with friends"
								className="mx-auto mb-8 h-32 w-32 object-cover rounded-full mt-8"
								src={Vishal}
							/>
							<p className="mb-6 leading-relaxed text-slate-500 dark:text-slate-400">
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
							<div className="text-xs text-slate-400">Lorem Ipsum</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default StaffColumns;
