import Header from "./components/Header"; // Assuming Header is in the same directory
import TwoColumnsWithImage from "./components/TwoColumnsWithImage";
import StaffColumns from "./components/StaffColumns";
import Footer from "./components/Footer";
import Carousel from "./components/Carousel";
import MariiaPoster from "./assets/MariiaPoster.jpeg";
import Publications from "./components/Publications";
import PublicationList from "./components/PublicationList";
import Event from "./components/Event1";
import promiseAi from "./assets/promiseAi.jpeg";
import structures from "./assets/joel-filipe-unsplash.jpg";
import bias from "./assets/mitigating_bias.png";
import eagle from "./assets/eagle.jpg";
import Videos from "./components/Videos";
import Collaborators from "./components/Collaborators";
import News from "./components/News";
import NewsTwo from "./components/NewsTwo";
import Slide from "./components/Slide";
import NewsThree from "./components/NewsThree";

const videoUrls = [
	"https://www.youtube.com/embed/Kqh9DtCNji4",
	"https://www.youtube.com/embed/j5cDDuLYcgE",
	"https://www.youtube.com/embed/w6HUFTcHfPg",
];

function App() {
	return (
		<div className="App">
			<Header />
			<TwoColumnsWithImage />
			<div className="flex justify-center items-center bg-white h-full mx-4">
				<div className="max-w-lg">
					<Carousel autoSlide={false}>
						{videoUrls.map((url, index) => (
							<Slide key={index} url={url} />
						))}
					</Carousel>
				</div>
			</div>
			<PublicationList />
			<h1
				id="news"
				className="w-full text-center text-4xl font-extrabold md:mx-auto md:w-4/5 mt-12 mb-6"
			>
				<span className="text-cyan-500">N</span>
				<span>ews</span>
			</h1>
			<NewsTwo />
			<NewsThree />

			<StaffColumns />
			<Collaborators />
			<Footer />
		</div>
	);
}

export default App;
