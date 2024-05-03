import Header from "./Header"; // Assuming Header is in the same directory
import TwoColumnsWithImage from "./TwoColumnsWithImage";
import StaffColumns from "./StaffColumns";
import Footer from "./Footer";
// import News from "./News";
import NewsTwo from "./NewsTwo";
import Carousel from "./Carousel";
import jive from "./assets/jive_linkedin.jpg";
import Maria from "./assets/Mariia.jpg";
import Vishal from "./assets/Vishal-001.jpg";
import Matt from "./assets/Matt.jpeg";

const slides = [jive, Maria, Vishal, Matt];

function App() {
	return (
		<div className="App">
			<Header />
			<TwoColumnsWithImage />
			{/* <News /> */}

			<div className="flex justify-center items-center bg-white h-screen">
				<div className="max-w-lg">
					<Carousel autoSlide={false}>
						{[
							...slides.map((s, index) => (
								<img key={index} src={s} className="object-cover h-full" />
							)),
						]}
					</Carousel>
				</div>
			</div>

			<h2 className="font-manrope text-4xl font-bold text-gray-900 text-center mb-16">
				News
			</h2>
			<NewsTwo />
			<NewsTwo />
			<StaffColumns />
			<Footer />

			{/* Other components go here */}
		</div>
	);
}

export default App;
