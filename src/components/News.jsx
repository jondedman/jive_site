import NewsCard from "./NewsCard";
import structures from "../assets/joel-filipe-unsplash.jpg";
import promiseAi from "../assets/promiseAi.jpeg";
import bias from "../assets/mitigating_bias.png";
import poster from "../assets/AT-poster-jive.pdf";
import MariiaPoster from "../assets/MariiaPoster.jpeg";
import gold from "../assets/gold.jpg";

function News() {
	return (
		<section>
			<div className="flex justify-center flex-wrap gap-8">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						<NewsCard
							imageSrc={structures}
							imageAlt="Photo by Joel Filipe on Unsplash"
							date="April 22, 2024"
							title="What will we be saying about AI in ten years’ time?"
							description="will be discussing what crisis points may have emerged recently and what AI governance structures might look like."
							readMoreLink="https://www.nottingham.ac.uk/humanities/departments/philosophy/news-and-events/events/2024/ai-in-ten-years-time.aspx"
							nameLink={[
								{ url: "https://julia-ive.github.io/", name: "Dr Julia Ive" },
								{
									url:
										"https://www.nottingham.ac.uk/clas/people/gianluca.sergi",
									name: "Professor Gianluca Sergi",
								},
							]}
						/>
						<NewsCard
							imageSrc={promiseAi}
							imageAlt="blogs tailwind section"
							date="April 18, 2024"
							title="The promise of AI: working across disciplines for the public good"
							description="will be presenting a seminar at the event. With at Queen Mary University of London"
							readMoreLink="https://www.eventbrite.co.uk/e/the-promise-of-ai-working-across-disciplines-for-the-public-good-tickets-848336065007"
							nameLink={[
								{
									url: "https://julia-ive.github.io/",
									name: "Dr Julia Ive",
								},
								{
									url:
										"https://www.turing.ac.uk/people/researchers/david-leslie",
									name: "David Leslie",
								},
								{
									url:
										"https://www.qmul.ac.uk/busman/staff/academic/profiles/cruxeni.html",
									name: "Dr Isadora Cruxen",
								},
							]}
						/>
						<NewsCard
							imageSrc={bias}
							imageAlt="Mitigating bias poster"
							date="Mar 28, 2024"
							title="Mental Health Monitoring workshop"
							description="and Vishal presented the poster at the AI for Mental Health Monitoring workshop at the Fringe Event of Alan Turing Institute"
							readMoreLink={poster}
							nameLink={[
								{ url: "https://julia-ive.github.io/", name: "Julia" },
							]}
						/>
						<NewsCard
							imageSrc={MariiaPoster}
							imageAlt="Mariia in front of the poster"
							imageClass={"object-cover"}
							date="21-22 March, 2024"
							title="Artificial Intelligence in Healthcare: Shaping the Future of Science (AI4H) Conference, University of Padua, Padova, Italy"
							description="and Mariia present the poster for Mitigating Bias in Pediatric Mental Health Notes via rewriting."
							readMoreLink="https://ai4h.unipd.it/home/posters/"
							nameLink={[
								{ url: "https://julia-ive.github.io/", name: "Julia" },
							]}
						/>
						<NewsCard
							imageSrc={gold}
							imageAlt="picture of gold blur"
							date="Mar 18, 2024"
							title="Regulating AI in Digital Mental Health Forum"
							description="will be speaking at the Regulating AI in Digital Mental Health Forum, AI Turing Fringe Event."
							readMoreLink="https://events.bizzabo.com/576079/agenda/speakers/3223878"
							nameLink={[
								{ url: "https://julia-ive.github.io/", name: "Dr Julia Ive" },
							]}
						/>
					</div>
				</div>
			</div>
		</section>
	);
}

export default News;
