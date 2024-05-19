import PropTypes from "prop-types";

function parseDescription(description) {
	return description.map((item, index) => {
		if (item.type === "text") {
			return <span key={index}>{item.content}</span>;
		} else if (item.type === "link") {
			return (
				<a
					key={index}
					className="underline"
					href={item.url}
					target="_blank"
					rel="noopener noreferrer"
				>
					{item.content}
				</a>
			);
		}
	});
}

function NewsCard({
	imageSrc,
	imageAlt,
	date,
	title,
	description,
	readMoreLink,
	// nameLink,
	imageClass,
}) {
	return (
		<div className="group w-[96rem] max-w-full border border-gray-300 rounded-2xl">
			<div className="flex items-center">
				<img
					src={imageSrc}
					alt={imageAlt}
					className={`rounded-t-2xl h-60 w-full ${imageClass}`}
				/>
			</div>
			<div className="p-4 lg:p-6 transition-all duration-300 rounded-b-2xl group-hover:bg-gray-50">
				<span className="text-cyan-500 font-medium mb-3 block">{date}</span>
				<h4 className="text-xl text-gray-900 font-medium leading-8 mb-5">
					{title}
				</h4>
				<p className="text-gray-500 leading-6 mb-10">
					{parseDescription(description)}
				</p>
				<a
					className="cursor-pointer text-lg text-cyan-500 font-semibold"
					href={readMoreLink}
					rel="noopener noreferrer"
					target="_blank"
				>
					Read more..
				</a>
			</div>
		</div>
	);
}

NewsCard.propTypes = {
	imageSrc: PropTypes.string.isRequired,
	imageAlt: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	description: PropTypes.arrayOf(
		PropTypes.shape({
			type: PropTypes.string.isRequired,
			content: PropTypes.string.isRequired,
			url: PropTypes.string,
		})
	).isRequired,
	readMoreLink: PropTypes.string.isRequired,
	nameLink: PropTypes.arrayOf(
		PropTypes.shape({
			url: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
		})
	),
	imageClass: PropTypes.string,
};

export default NewsCard;
