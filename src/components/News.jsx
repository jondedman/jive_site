import NewsCard from "./NewsCard";
import newsData from "../assets/newsData";

function News() {
	return (
		<section>
			<div className="flex justify-center flex-wrap gap-8">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{newsData.map((newsItem) => (
							<NewsCard
								key={newsItem.date}
								imageSrc={newsItem.imageSrc}
								imageClass={newsItem.imageClass}
								imageAlt={newsItem.imageAlt}
								date={newsItem.date}
								title={newsItem.title}
								description={newsItem.description}
								readMoreLink={newsItem.readMoreLink}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

export default News;
