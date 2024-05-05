import propTypes from "prop-types";

function Event({ imgSrc, altText, date, title, description, link, speakers }) {
	return (
		<div className="group w-full max-lg:max-w-xl border border-gray-300 rounded-2xl h-60vh">
			<div className="flex items-center">
				<img
					src={imgSrc}
					alt={altText}
					className="rounded-t-2xl min-w-full object-cover h-60"
				/>
			</div>
			<div className="p-4 lg:p-6 transition-all duration-300 rounded-b-2xl group-hover:bg-gray-50">
				<span className="text-cyan-500 font-medium mb-3 block">{date}</span>
				<h4 className="text-xl text-gray-900 font-medium leading-8 mb-5">
					{title}
				</h4>
				<p className="text-gray-500 leading-6 mb-10">
					{description + " "}
					{speakers.map((speaker, index) => (
						<span key={index}>
							<a
								className="underline text-cyan-500"
								href={speaker.url}
								rel="noopener noreferrer"
								target="_blank"
							>
								{speaker.name}
							</a>
							{index < speakers.length - 1 && ", "}
						</span>
					))}
					.
				</p>
				<a
					className="cursor-pointer text-lg text-cyan-500 font-semibold"
					href={link}
					rel="noopener noreferrer"
					target="_blank"
				>
					Read more..
				</a>
			</div>
		</div>
	);
}
Event.propTypes = {
	imgSrc: propTypes.string.isRequired,
	altText: propTypes.string.isRequired,
	date: propTypes.string.isRequired,
	title: propTypes.string.isRequired,
	description: propTypes.string.isRequired,
	link: propTypes.string.isRequired,
	speakers: propTypes.arrayOf(
		propTypes.shape({
			name: propTypes.string.isRequired,
			url: propTypes.string.isRequired,
		})
	).isRequired,
};

export default Event;
