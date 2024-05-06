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
import Slide from "./Slide";
import NewsThree from "./NewsThree";

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
			<Publication_list />
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
