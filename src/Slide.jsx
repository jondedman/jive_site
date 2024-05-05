const Slide = ({ url }) => (
	<div className="min-w-full max-w-md p-4 shadow-md rounded-lg m-2">
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

export default Slide;
