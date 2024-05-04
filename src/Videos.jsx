function Videos() {
	return (
		<div className="flex items-center justify-center space-y-4">
			<div className="w-full max-w-md p-4 shadow-md rounded-lg">
				<iframe
					width="100%"
					height="315"
					src="https://www.youtube.com/embed/Kqh9DtCNji4"
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen
				></iframe>
			</div>
			<div className="w-full max-w-md p-4 shadow-md rounded-lg">
				<iframe
					width="100%"
					height="315"
					src="https://www.youtube.com/embed/j5cDDuLYcgE"
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen
				></iframe>
			</div>
			<div className="w-full max-w-md p-4 shadow-md rounded-lg">
				<iframe
					width="100%"
					height="315"
					src="https://www.youtube.com/embed/w6HUFTcHfPg"
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen
				></iframe>
			</div>
		</div>
	);
}

export default Videos;
