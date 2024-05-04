function Videos() {
	return (
		<div className="flex flex-col lg:flex-row items-center justify-center space-y-4 my-16">
			<div className="w-full max-w-md p-4 shadow-md rounded-lg m-2">
				<iframe
					width="100%"
					height="315"
					src="https://www.youtube.com/embed/Kqh9DtCNji4"
					title="YouTube video player"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen
				></iframe>
			</div>
			<div className="w-full max-w-md p-4 shadow-md rounded-lg m-2">
				<iframe
					width="100%"
					height="315"
					src="https://www.youtube.com/embed/j5cDDuLYcgE"
					title="YouTube video player"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen
				></iframe>
			</div>
			<div className="w-full max-w-md p-4 shadow-md rounded-lg m-2">
				<iframe
					width="100%"
					height="315"
					src="https://www.youtube.com/embed/w6HUFTcHfPg"
					title="YouTube video player"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen
				></iframe>
			</div>
		</div>
	);
}

export default Videos;
