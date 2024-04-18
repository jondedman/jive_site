import conferenceImage from "./assets/conference1.jpeg";
const benefits = [
	"Various types of coffee beans",
	"Coworking area",
	"Meeting room",
];

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
					Presenting research into privacy and bias in AI / Details about the
					Lab/department etc
				</h1>
				<p className="mb-2 leading-relaxed text-slate-700 dark:text-slate-400">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores
					iste dolore dolores, ullam sapiente facilis praesentium minus ad quam
					ab, ducimus tempore quo voluptatum, optio eum corrupti nesciunt cumque
					aut. Lorem ipsum dolor sit amet, consectetur adipisicing elit. In
					expedita minima nobis quos sequi, maxime exercitationem accusantium
					cumque numquam fugiat sunt consequatur facilis, voluptatem tempore
					tenetur corporis blanditiis laboriosam provident! Lorem ipsum, dolor
					sit amet consectetur adipisicing elit. Asperiores iste dolore dolores,
					ullam sapiente facilis praesentium minus ad quam ab, ducimus tempore
					quo voluptatum, optio eum corrupti nesciunt cumque aut. Lorem ipsum
					dolor sit amet, consectetur adipisicing elit. In expedita minima nobis
					quos sequi, maxime exercitationem accusantium cumque numquam fugiat
					sunt consequatur facilis, voluptatem tempore tenetur corporis
					blanditiis laboriosam provident!
				</p>
				<ul className="mb-8 flex flex-col items-center space-y-1 dark:text-slate-400 sm:items-start">
					{benefits.map((benefit, index) => (
						<li className="flex items-end" key={index}>
							<span className="mr-2 text-orange-300">&#10003;</span>
							<span>{benefit}</span>
						</li>
					))}
				</ul>
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
