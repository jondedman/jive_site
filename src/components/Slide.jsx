import PropTypes from "prop-types";

const Slide = ({ url }) => (
	<div className="w-full shadow-md rounded-lg m-2 w-full">
		<iframe
			width="100%"
			height="315"
			src={url}
			title="YouTube video player"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowFullScreen
		></iframe>
	</div>
);

Slide.propTypes = {
	url: PropTypes.string.isRequired,
};

export default Slide;
