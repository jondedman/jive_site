import linkage from "./assets/Linkage.jpg";
import clone from "./assets/codeClone.jpg";
import social from "./assets/socialMedia.jpg";

function Publications() {
	return (
		<section className="py-24">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<h2 className="font-manrope text-4xl font-bold text-gray-900 text-center mb-14">
					Papers and publications
				</h2>
				<div className="flex justify-center mb-14 gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-around lg:gap-x-8">
					<a
						href="https://arxiv.org/abs/2404.19486v1"
						target="_blank"
						rel="noreferrer"
						className="group relative cursor-pointer w-full max-lg:max-w-xl lg:w-1/4 h-90 border border-gray-300 rounded-2xl p-3 transition-all duration-300 hover:border-indigo-600"
					>
						<div className="flex items-center justify-center mb-6 h-40">
							<img
								src={linkage}
								alt="Unsplash image of network by Alina Grubnyak"
								className="rounded-lg w-full h-full object-cover"
							></img>
						</div>
						<div className="block">
							<h4 className="text-gray-900 text-sm font-bold leading-8 mb-9">
								Safe Training with Sensitive In-domain Data: Leveraging Data
								Fragmentation To Mitigate Linkage Attacks
							</h4>
							<div className="flex items-center justify-between  font-medium">
								<h6 className="absolute bottom-4 text-sm text-gray-500">
									Ignashina, M., & Ive, J. (2024)
								</h6>
							</div>
						</div>
					</a>

					<a
						href="https://arxiv.org/abs/2312.16488v1"
						target="_blank"
						rel="noreferrer"
						className="group relative cursor-pointer w-full max-lg:max-w-xl lg:w-1/4 h-90 border border-gray-300 rounded-2xl p-3 transition-all duration-300 hover:border-indigo-600"
					>
						<div className="flex items-center mb-6 h-40">
							<img
								src={clone}
								alt="floating orb by Michael Dziedzic on Unsplash"
								className="rounded-lg w-full h-full object-cover"
							></img>
						</div>
						<div className="block">
							<h4 className="text-gray-900 text-sm font-bold leading-8 mb-9">
								Source Code is a Graph, Not a Sequence: A Cross-Lingual
								Perspective on Code Clone Detection.
							</h4>
							<div className="flex absolute bottom-4 items-center justify-between  font-medium">
								<h6 className="text-sm text-gray-500">
									Rahaman, M. A., & Ive, J. (2023)
								</h6>
							</div>
						</div>
					</a>

					<a
						href="https://aclanthology.org/2024.clpsych-1.22.pdf"
						target="_blank"
						rel="noreferrer"
						className="group relative cursor-pointer w-full max-lg:max-w-xl lg:w-1/4 h-90 border border-gray-300 rounded-2xl p-3 transition-all duration-300 hover:border-indigo-600"
					>
						<div className="flex items-center mb-6 h-40">
							<img
								src={social}
								alt="streaks of light by Chrisopher burns on Unsplash"
								className="rounded-lg w-full h-full object-cover"
							></img>
						</div>
						<div className="block">
							<h4 className="text-gray-900 text-sm font-bold leading-8 mb-9">
								Using Large Language Models (LLMs) to Extract Evidence from
								Pre-Annotated Social Media Data. (232–237)
							</h4>
							<div className="flex  absolute bottom-4 items-center justify-between  font-medium">
								<h6 className="text-sm text-gray-500">
									Alhamed, F., Ive, J., & Specia, L. (2024)
								</h6>
							</div>
						</div>
					</a>

					<a
						href="https://aclanthology.org/2024.clpsych-1.22.pdf"
						target="_blank"
						rel="noreferrer"
						className="group relative cursor-pointer w-full max-lg:max-w-xl lg:w-1/4 h-90 border border-gray-300 rounded-2xl p-3 transition-all duration-300 hover:border-indigo-600"
					>
						<div className="flex items-center mb-6 h-40">
							<img
								src={social}
								alt="streaks of light by Chrisopher burns on Unsplash"
								className="rounded-lg w-full h-full object-cover"
							></img>
						</div>
						<div className="block">
							<h4 className="text-gray-900 text-sm font-bold leading-8 mb-9">
								Using Large Language Models (LLMs) to Extract Evidence from
								Pre-Annotated Social Media Data. (232–237)
							</h4>
							<div className="flex  absolute bottom-4 items-center justify-between  font-medium">
								<h6 className="text-sm text-gray-500">
									Alhamed, F., Ive, J., & Specia, L. (2024)
								</h6>
							</div>
						</div>
					</a>
				</div>
				{/* <a
					href="javascript:;"
					className="cursor-pointer border border-gray-300 shadow-sm rounded-full py-3.5 px-7 w-52 flex justify-center items-center text-gray-900 font-semibold mx-auto transition-all duration-300 hover:bg-gray-100"
				>
					View All
				</a> */}
			</div>
		</section>
	);
}

export default Publications;
