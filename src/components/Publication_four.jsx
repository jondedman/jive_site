import Maria from "../assets/Mariia.jpg";

function Publication_four() {
	return (
		<div className="flex w-full flex-col justify-between rounded-lg bg-white py-8 px-6 text-center text-slate-800 shadow-lg shadow-slate-200 transition dark:bg-slate-800 dark:shadow-slate-800">
			<div className="flex flex-col justify-between h-full w-full text-center text-sm">
				<div>
					<img
						alt="Picture of Mariia Ignashina"
						className="mx-auto mb-8 h-32 w-32 mt-8 rounded-full"
						src={Maria}
					/>
					<p className="mb-6 leading-relaxed text-slate-500 dark:text-slate-400">
						Mariia has a Master of Science with Distinction in Computer Science,
						Queen Mary University of London, and a Bachelor of Science in
						Natural Language Processing, Higher School of Economics University.
						She is currently working on mapping PHQ-9 questions to clinical
						notes of Cincinnati Childrens Hospital patients, Identifying and
						eliminating potential bias in the clinical notes of depressive
						patients, and Safe training with sensitive in-domain data.
					</p>
				</div>

				<div>
					<div className="font-semibold text-slate-600">Mariia Ignashina</div>
					<div className="text-xs text-slate-400">Lorem Ipsum</div>
				</div>
			</div>
		</div>
	);
}

export default Publication_four;
