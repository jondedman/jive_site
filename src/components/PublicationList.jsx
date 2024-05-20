import PublicationCard from "./PublicationCard";
import publicationData from "../assets/publicationData";

function PublicationList() {
	return (
		<section id="publications" className="py-24">
			<h2 className=" text-4xl font-bold text-gray-900 text-center px-6 mb-6">
				<span className="text-cyan-500 font-bold">P</span>
				ublications
			</h2>
			<div className="flex mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<ul className="space-y-4 leading-8 px-4 text-left">
					{publicationData.map((publication, index) => (
						<PublicationCard key={index} {...publication} />
					))}
				</ul>
			</div>
		</section>
	);
}

export default PublicationList;
