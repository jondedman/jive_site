import Header from "./Header"; // Assuming Header is in the same directory
import TwoColumnsWithImage from "./TwoColumnsWithImage";
import StaffColumns from "./StaffColumns";
import Footer from "./Footer";
import Carousel from "./Carousel";
import MariiaPoster from "./assets/MariiaPoster.jpeg";
import Publications from "./Publications";
import Publication_list from "./Publication_list";
import Event from "./Event1";
import promiseAi from "./assets/promiseAi.jpeg";
import structures from "./assets/joel-filipe-unsplash.jpg";
import bias from "./assets/mitigating_bias.png";
import eagle from "./assets/eagle.jpg";
import Videos from "./Videos";
import Collaborators from "./Collaborators";
import News from "./News";
import NewsTwo from "./NewsTwo";

const slides = [
	<div key="event1">
		<Event
			imgSrc={structures}
			altText="Photo by Joel Filipe on Unsplash"
			date="April 22, 2024"
			title="What will we be saying about AI in ten years’ time?"
			description="Dr Julia Ive and Professor Gianluca Sergi, will be discussing what crisis
		points may have emerged recently and what AI governance
		structures might look like."
			link=""
			speakers={[
				{
					name: "Dr Julia Ive",
					url:
						"https://www.qmul.ac.uk/eecs/about-us/equality-diversity-and-inclusion/women-in-computer-science-and-electronic-engineering/dr-julia-ive/",
				},
				{
					name: "Professor Gianluca Sergi",
					url: "https://www.nottingham.ac.uk/CLAS/people/gianluca.sergi",
				},
			]}
		/>
	</div>,

	<div key="event2">
		<Event
			imgSrc={promiseAi}
			altText="Image from queen mary university of london event"
			date="April 18, 2024"
			title="The promise of AI: working across disciplines for the public good"
			description="Dr Julia Ive will be presenting a seminar at the event. With "
			link="https://www.eventbrite.co.uk/e/the-promise-of-ai-working-across-disciplines-for-the-public-good-tickets-848336065007"
			speakers={[
				{
					name: "David Leslie",
					url: "https://www.turing.ac.uk/people/researchers/david-leslie",
				},
				{
					name: "Dr Isadora Cruxen",
					url:
						"https://www.qmul.ac.uk/busman/staff/academic/profiles/cruxeni.html",
				},
			]}
		/>
	</div>,
	<div key="event3">
		<Event
			imgSrc={bias}
			altText="Image of the poster presented at AI for Mental Health Monitoring workshop"
			date="Mar 28, 2024"
			title="Mental Health Monitoring workshop"
			description="Dr Julia Ive and Vishal Yadav presented the poster at AI for Mental Health Monitoring workshop at the Fringe Event of Alan Turing Institute."
			link="src/assets/AT-poster-jive.pdf"
			speakers={[
				{
					name: "Dr Julia Ive",
					url: "https://www.qmul.ac.uk/eecs/about-us/equality-diversity",
				},
				{
					name: "Vishal Yadav",
					url: "",
				},
			]}
		/>
	</div>,
	<div key="event4">
		<Event
			imgSrc={MariiaPoster}
			altText="Mariia Ignashina presenting the poster"
			date="21-22 March"
			title="Artificial Intelligence in Healthcare: Shaping the Future of Science (AI4H) Conference, University of Padua, Padova, Italy."
			description=" Dr Julia Ive and Mariia present the poster for Mitigating Bias in Pediatric Mental Health Notes via rewriting."
			link="https://ai4h.unipd.it/home/posters/
		"
			speakers={[
				{
					name: "Dr Julia Ive ",
					url: "https://www.qmul.ac.uk/eecs/about-us/equality-diversity",
				},
				{
					name: "Mariia Ignashina",
					url: "",
				},
			]}
		/>
	</div>,
	<div key="event5">
		<Event
			imgSrc={eagle}
			altText="Chat GPT abstract image of dots and lines"
			date="Mar 18, 2024"
			title="AI Ethics and Regulations"
			description="Dr Julia Ive is a panel speaker at the joint event between Queen Mary Global Policy Institute, the Society for Computers and Law, and The World Bank."
			link="src/assets/AT-poster-jive.pdf"
			speakers={[
				{
					name: "Dr Julia Ive",
					url: "https://www.youtube.com/watch?v=w6HUFTcHfPg",
				},
			]}
		/>
	</div>,
];

function App() {
	return (
		<div className="App">
			<Header />
			<TwoColumnsWithImage />
			{/* <Publications /> */}
			<Publication_list />
			{/* <News /> */}
			<NewsTwo />
			{/* <Videos /> */}
			<div className="flex justify-center items-center bg-white h-full mx-4">
				<div className="max-w-lg">
					<Carousel autoSlide={false}>
						{slides.map((slide, index) => (
							<div key={index} className="min-w-full">
								{slide}
							</div>
						))}
					</Carousel>
				</div>
			</div>

			{/* <h2 className="font-manrope text-4xl font-bold text-gray-900 text-center mb-16 mt-8">
				News
			</h2> */}
			{/* <NewsTwo />
			<NewsTwo /> */}
			<StaffColumns />
			<Collaborators />
			<Footer />

			{/* Other components go here */}
		</div>
	);
}

export default App;
