import PropTypes from "prop-types";

function PublicationCard({ url, authors, title, year, description }) {
	return (
		<a
			href={url}
			target="_blank"
			rel="noreferrer"
			className="block hover:border-indigo-600 -py-4"
		>
			<li className="w-full border border-transparent rounded-2xl transition-all duration-300 hover:border-indigo-600 px-2">
				{authors} ({year}).{" "}
				<span className="text-cyan-500 font-semi-bold">{title}</span>{" "}
				<span className="font-bold">{description}</span>
			</li>
		</a>
	);
}

export default PublicationCard;

PublicationCard.propTypes = {
	url: PropTypes.string.isRequired,
	authors: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	year: PropTypes.string.isRequired,
};
