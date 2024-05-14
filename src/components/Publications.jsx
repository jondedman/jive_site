import linkage from "../assets/Linkage.jpg";
import clone from "../assets/codeClone.jpg";
import social from "../assets/socialMedia.jpg";
import humanMachine from "../assets/humanMachine.jpg";
import tableText from "../assets/tableText.jpg";
import gold from "../assets/gold.jpg";
import brainNetwork from "../assets/brainNetwork.jpg";
import Exploiting from "../assets/Exploiting.jpg";
import surf from "../assets/surf.jpg";
import network from "../assets/network.jpg";

function Publications() {
	const publications = [
		{
			href: "https://arxiv.org/abs/2404.19486v1",
			image: linkage,
			alt: "Unsplash image of network by Alina Grubnyak",
			title:
				"Safe Training with Sensitive In-domain Data: Leveraging Data Fragmentation To Mitigate Linkage Attacks",
			author: "Ignashina, M., & Ive, J. (2024)",
		},
		{
			href: "https://arxiv.org/abs/2312.16488v1",
			image: clone,
			alt: "floating orb by Michael Dziedzic on Unsplash",
			title:
				"Source Code is a Graph, Not a Sequence: A Cross-Lingual Perspective on Code Clone Detection.",
			author: "Rahaman, M. A., & Ive, J. (2023)",
		},
		{
			href: "https://aclanthology.org/2024.clpsych-1.22.pdf",
			image: social,
			alt: "streaks of light by Chrisopher burns on Unsplash",
			title:
				"Using Large Language Models (LLMs) to Extract Evidence from Pre-Annotated Social Media Data. (232–237)",
			author: "Alhamed, F., Ive, J., & Specia, L. (2024)",
		},
		{
			href:
				"https://www.frontiersin.org/journals/digital-health/articles/10.3389/fdgth.2023.1188338/full",
			image: humanMachine,
			alt: "Human and Machine image by Stefan Cosma on Unsplash",
			title:
				"Embracing the uncertainty in human-machine collaboration to support clinical decision making for Mental Health Conditions.",
			author: "Popat, R., & Ive, J. (n.d.).",
		},
		{
			href: "https://doi.org/10.48550/ARXIV.2205.12368",
			image: tableText,
			alt: "Photo by Maxime Valcarce on Unsplash",
			title:
				"Medical Scientific Table-to-Text Generation with Human-in-the-Loop under the Data Sparsity Constraint",
			author:
				"Wu, H.-Y., Zhang, J., Ive, J., Li, T., Gupta, V., Chen, B., & Guo, Y. (2022)",
		},
		{
			href: "https://doi.org/10.1038/s41746-020-0267-x",
			image: brainNetwork,
			alt: "image of brain by Growtika on unsplash",
			title:
				"Generation and evaluation of artificial mental health records for Natural Language Processing",
			author:
				"Ive, J., Viani, N., Kam, J., Yin, L., Verma, S., Puntis, S., Cardinal, R. N., Roberts, A., Stewart, R., & Velupillai, S. (2020)",
		},
		{
			href: "https://arxiv.org/abs/2205.14761",
			image: gold,
			alt: "gold image by Growtica on unsplash",
			title:
				"Modeling Disagreement in Automatic Data Labelling for Semi-Supervised Learning in Clinical Natural Language Processing",
			author: "Liu, H., Seedat, N., & Ive, J. (2022)",
		},
		{
			href: "https://arxiv.org/pdf/2102.11387",
			image: Exploiting,
			alt: "typing onn computer by Sergey Zulkin on unsplash",
			title:
				"Exploiting Multimodal Reinforcement Learning for Simultaneous Machine Translation",
			author:
				"Ive, J., Li, A. M., Miao, Y., Caglayan, O., Madhyastha, P., & Specia, L. (2021)",
		},
		{
			href: "https://aclanthology.org/2022.naacl-main.334.pdf",
			image: surf,
			alt: "swarm of dots by and_machines on unsplash",
			title:
				"SURF: Semantic-level Unsupervised Reward Function for Machine Translation",
			author: "Anuchitanukul, A., & Ive, J. (2022)",
		},
		{
			href:
				"https://www.frontiersin.org/journals/digital-health/articles/10.3389/fdgth.2022.1010202/full",
			image: network,
			alt: "network of nodes Dall-E image",
			title:
				"Leveraging the potential of synthetic text for AI in mental healthcare",
			author: "Ive, J. (2022)",
		},

		// Add more objects here for each publication
	];

	return (
		<section id="publications" className="py-24">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<h2 className="font-manrope text-4xl font-bold text-gray-900 text-center mb-14">
					Papers and publications
				</h2>
				<div className="flex justify-center mb-14 gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-wrap lg:flex-row lg:justify-center lg:gap-x-8">
					{publications.map((publication) => (
						<a
							key={publication.href}
							href={publication.href}
							target="_blank"
							rel="noreferrer"
							className="group relative cursor-pointer w-full max-lg:max-w-xl lg:w-1/4 h-90 border border-gray-300 rounded-2xl p-3 transition-all duration-300 hover:border-indigo-600 mb-4"
						>
							<div className="flex items-center justify-center mb-6 h-40">
								<img
									src={publication.image}
									alt={publication.alt}
									className="rounded-lg w-full h-full object-cover"
								></img>
							</div>
							<div className="block">
								<h4 className="text-gray-900 text-sm font-bold leading-8 mb-9">
									{publication.title}
								</h4>
								<div className="flex items-center justify-between  font-medium">
									<h6 className="absolute bottom-4 text-sm text-gray-500">
										{publication.author}
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

export default Publications;

// Ive, J. (2022). Leveraging the potential of synthetic text for AI in mental healthcare. Frontiers in Digital Health, 4, 1010202. https://doi.org/10.3389/FDGTH.2022.1010202/BIBTEX

// Anuchitanukul, A., & Ive, J. (2022). SURF: Semantic-level Unsupervised Reward Function for Machine Translation. Proceedings of the 2022 Conference of the North American Chapter of the Association for Computational Linguistics: Human Language Technologies, 4508–4522. https://aclanthology.org/2022.naacl-main.334.pdf

// Liu, H., Seedat, N., & Ive, J. (2022). Modeling Disagreement in Automatic Data Labelling for Semi-Supervised Learning in Clinical Natural Language Processing. https://arxiv.org/abs/2205.14761

// Ive, J., Li, A. M., Miao, Y., Caglayan, O., Madhyastha, P., & Specia, L. (2021). Exploiting Multimodal Reinforcement Learning for Simultaneous Machine Translation. Proceedings of the 16th Conference of the {E}uropean Chapter of the Association for Computational Linguistics.  https://arxiv.org/pdf/2102.11387

// Ive, J., Viani, N., Kam, J., Yin, L., Verma, S., Puntis, S., Cardinal, R. N., Roberts, A., Stewart, R., & Velupillai, S. (2020). Generation and evaluation of artificial mental health records for Natural Language Processing. Npj Digital Medicine 2020 3:1, 3(1), 1–9. https://doi.org/10.1038/s41746-020-0267-x
