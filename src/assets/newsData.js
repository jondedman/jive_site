// newsData.js
import structures from "../assets/joel-filipe-unsplash.jpg";
import promiseAi from "../assets/promiseAi.jpeg";
import bias from "../assets/mitigating_bias.png";
import poster from "../assets/AT-poster-jive.pdf";
import MariiaPoster from "../assets/MariiaPoster.jpeg";
import gold from "../assets/gold.jpg";
import cog from "../assets/CogX.jpeg";

const newsData = [
	{
		imageSrc: cog,
		imageAlt: "Picture of delegates at CogX event",
		date: "May 9, 2024",
		title:
			"Addressing Socio-technical Limitations of LLMs for Medical and Social Computing",
		description: [
			{ type: "text", content: "Dr Julia Ive represents the " },
			{ type: "link", content: "Responsible Ai UK", url: "https://rai.ac.uk/" },
			{ type: "text", content: " Keystone project on " },
			{
				type: "link",
				content:
					"Addressing Socio-technical Limitations of LLMs for Medical and Social Computing (AdSoLve)",
				url: "https://adsolve.github.io",
			},
			{ type: "text", content: " led by " },
			{
				type: "link",
				content: "Prof Maria Liakata",
				url: "https://www.turing.ac.uk/people/researchers/maria-liakata",
			},
			{ type: "text", content: " at " },
			{
				type: "link",
				content: "CogX Los Angeles",
				url: "https://www.cogxfestival.com/",
			},
			{ type: "text", content: "." },
		],
		readMoreLink: "https://www.cogxfestival.com/",
	},
	{
		imageSrc: structures,
		imageAlt: "Photo by Joel Filipe on Unsplash",
		date: "April 22, 2024",
		title: "What will we be saying about AI in ten years’ time?",
		description: [
			{ type: "text", content: "Dr Julia Ive and " },
			{
				type: "link",
				content: "Professor Gianluca Sergi",
				url: "https://www.nottingham.ac.uk/clas/people/gianluca.sergi",
			},
			{
				type: "text",
				content:
					" will be discussing what crisis points may have emerged recently and what AI governance structures might look like.",
			},
		],
		readMoreLink:
			"https://www.nottingham.ac.uk/humanities/departments/philosophy/news-and-events/events/2024/ai-in-ten-years-time.aspx",
	},
	{
		imageSrc: promiseAi,
		imageAlt: "blogs tailwind section",
		date: "April 18, 2024",
		title: "The promise of AI: working across disciplines for the public good",
		description: [
			{
				type: "link",
				content: "Dr Julia Ive ",
				url: "https://julia-ive.github.io/",
			},
			{
				type: "text",
				content:
					"will be presenting a seminar at Queen Mary University of London with ",
			},
			{
				type: "link",
				content: "David Leslie ",
				url: "https://www.turing.ac.uk/people/researchers/david-leslie",
			},
			{ type: "text", content: "and " },
			{
				type: "link",
				content: "Dr Isadora Cruxen",
				url:
					"https://www.qmul.ac.uk/busman/staff/academic/profiles/cruxeni.html",
			},
			{ type: "text", content: "." },
		],
		readMoreLink:
			"https://www.eventbrite.co.uk/e/the-promise-of-ai-working-across-disciplines-for-the-public-good-tickets-848336065007",
	},
	{
		imageSrc: bias,
		imageAlt: "Mitigating bias poster",
		date: "Mar 28, 2024",
		title: "Mental Health Monitoring workshop",
		description: [
			{
				type: "text",
				content:
					"Julia and Vishal presented the poster at the AI for Mental Health Monitoring workshop at the Fringe Event of Alan Turing Institute.",
			},
		],
		readMoreLink: poster,
	},
	{
		imageSrc: MariiaPoster,
		imageAlt: "Mariia in front of the poster",
		imageClass: "object-cover",
		date: "21-22 March, 2024",
		title:
			"Artificial Intelligence in Healthcare: Shaping the Future of Science (AI4H) Conference, University of Padua, Padova, Italy",
		description: [
			{
				type: "text",
				content:
					"Julia and Mariia present the poster for Mitigating Bias in Pediatric Mental Health Notes via rewriting.",
			},
		],
		readMoreLink: "https://ai4h.unipd.it/home/posters/",
	},
	{
		imageSrc: gold,
		imageAlt: "picture of gold blur",
		date: "Mar 18, 2024",
		title: "Regulating AI in Digital Mental Health Forum",
		description: [
			{
				type: "text",
				content:
					"Dr Julia Ive will be speaking at the Regulating AI in Digital Mental Health Forum, AI Turing Fringe Event.",
			},
		],
		readMoreLink: "https://events.bizzabo.com/576079/agenda/speakers/3223878",
	},
];

export default newsData;
