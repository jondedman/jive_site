// import Maria from "./assets/Mariia.jpg";
import pub1 from "./assets/pub1.jpg";

function Publication_one() {
	return (
		<div className="flex w-full flex-col justify-between rounded-lg bg-white py-8 px-6 text-center text-slate-800 shadow-lg shadow-slate-200 transition dark:bg-slate-800 dark:shadow-slate-800">
			<div className="flex flex-col justify-between h-full w-full text-center text-sm">
				<div>
					<img
						alt="Picture of Mariia Ignashina"
						className="mx-auto mb-8 h-96 w-32 mt-8 rounded-full"
						src={pub1}
					/>
					<p className="mb-6 leading-relaxed text-slate-500 dark:text-slate-400">
						<a
							href="https://aclanthology.org/2024.clpsych-1.22.pdf"
							target="_blank"
							rel="noopener noreferrer"
							// className="underline decoration-transparent underline-offset-4 transition hover:decoration-slate-700 z-100"
						>
							Using Large Language Models (LLMs) to Extract Evidence from
							Pre-Annotated Social Media Data. 232–237.
						</a>
					</p>
				</div>

				<div>
					<div className="font-semibold text-slate-600">
						Alhamed, F., Ive, J., & Specia, L. (2024).
					</div>
					<div className="text-xs text-slate-400">Lorem Ipsum</div>
				</div>
			</div>
		</div>
	);
}

export default Publication_one;
