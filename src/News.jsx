import linkage from "./assets/Linkage.jpg";
import clone from "./assets/codeClone.jpg";
import social from "./assets/socialMedia.jpg";
import MariiaPoster from "./assets/MariiaPoster.jpeg";
import humanMachine from "./assets/humanMachine.jpg";
import tableText from "./assets/tableText.jpg";
import gold from "./assets/gold.jpg";
import brainNetwork from "./assets/brainNetwork.jpg";
import Exploiting from "./assets/Exploiting.jpg";
import surf from "./assets/surf.jpg";
import network from "./assets/network.jpg";

function News() {
	const events = [
		{
			imgSrc: linkage,
			altText: "Photo by Joel Filipe on Unsplash",
			date: "April 22, 2024",
			title: "What will we be saying about AI in ten years’ time?",
			description:
				"Dr Julia Ive and Professor Gianluca Sergi will be discussing what crisis points may have emerged recently and what AI governance structures might look like.",
			link: "",
			speakers: [
				{
					name: "Dr Julia Ive",
					url:
						"https://www.qmul.ac.uk/eecs/about-us/equality-diversity-and-inclusion/women-in-computer-science-and-electronic-engineering/dr-julia-ive/",
				},
				{
					name: "Professor Gianluca Sergi",
					url: "https://www.nottingham.ac.uk/CLAS/people/gianluca.sergi",
				},
			],
		},
		{
			imgSrc: clone,
			altText: "Image from queen mary university of london event",
			date: "April 18, 2024",
			title:
				"The promise of AI: working across disciplines for the public good",
			description: "Dr Julia Ive will be presenting a seminar at the event.",
			link:
				"https://www.eventbrite.co.uk/e/the-promise-of-ai-working-across-disciplines-for-the-public-good-tickets-848336065007",
			speakers: [
				{
					name: "David Leslie",
					url: "https://www.turing.ac.uk/people/researchers/david-leslie",
				},
				{
					name: "Dr Isadora Cruxen",
					url:
						"https://www.qmul.ac.uk/busman/staff/academic/profiles/cruxeni.html",
				},
			],
		},
		{
			imgSrc: social,
			altText:
				"Image of the poster presented at AI for Mental Health Monitoring workshop",
			date: "Mar 28, 2024",
			title: "Mental Health Monitoring workshop",
			description:
				"Dr Julia Ive and Vishal Yadav presented the poster at AI for Mental Health Monitoring workshop at the Fringe Event of Alan Turing Institute.",
			link: "src/assets/AT-poster-jive.pdf",
			speakers: [
				{
					name: "Dr Julia Ive",
					url: "https://www.qmul.ac.uk/eecs/about-us/equality-diversity",
				},
				{
					name: "Vishal Yadav",
					url: "",
				},
			],
		},
		{
			imgSrc: MariiaPoster,
			altText: "Mariia Ignashina presenting the poster",
			date: "21-22 March",
			title:
				"Artificial Intelligence in Healthcare: Shaping the Future of Science (AI4H) Conference, University of Padua, Padova, Italy.",
			description:
				" Dr Julia Ive and Mariia present the poster for Mitigating Bias in Pediatric Mental Health Notes via rewriting.",
			link: "https://ai4h.unipd.it/home/posters/",
			speakers: [
				{
					name: "Dr Julia Ive ",
					url: "https://www.qmul.ac.uk/eecs/about-us/equality-diversity",
				},
				{
					name: "Mariia Ignashina",
					url: "",
				},
			],
		},
		{
			imgSrc: humanMachine,
			altText: "Chat GPT abstract image of dots and lines",
			date: "Mar 18, 2024",
			title: "AI Ethics and Regulations",
			description:
				"Dr Julia Ive is a panel speaker at the joint event between Queen Mary Global Policy Institute, the Society for Computers and Law, and The World Bank.",
			link: "src/assets/AT-poster-jive.pdf",
			speakers: [
				{
					name: "Dr Julia Ive",
					url: "https://www.youtube.com/watch?v=w6HUFTcHfPg",
				},
			],
		},
	];

	return (
		<section id="news" className="py-24">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<h2 className="font-manrope text-4xl font-bold text-gray-900 text-center mb-14">
					News
				</h2>
				<div className="flex justify-center mb-14 gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-wrap lg:flex-row lg:justify-between lg:gap-x-8">
					{events.map((event) => (
						<a
							key={event.link}
							href={event.link}
							target="_blank"
							rel="noreferrer"
							className="group relative cursor-pointer w-full max-lg:max-w-xl lg:w-1/4 h-90 border border-gray-300 rounded-2xl p-3 transition-all duration-300 hover:border-indigo-600 mb-8"
						>
							<div className="flex items-center justify-center mb-6 h-40">
								<img
									src={event.imgSrc}
									alt={event.altText}
									className="rounded-lg w-full h-full object-cover"
								></img>
							</div>
							<div className="block">
								<h4 className="text-gray-900 text-sm font-bold leading-8 mb-9">
									{event.title}
								</h4>
								<div className="flex items-center justify-between  font-medium">
									<h6 className="absolute bottom-4 text-sm text-gray-500">
										{event.speakers.map((speaker) => speaker.name).join(", ")}
									</h6>
								</div>
							</div>
						</a>
					))}
				</div>
			</div>
		</section>
	);
}

export default News;
