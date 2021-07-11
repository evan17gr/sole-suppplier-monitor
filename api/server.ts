import express from 'express';
import axios from 'axios';
import cors from 'cors';

const app = express();
app.use(cors());

interface Shoes {
	productLink: string;
	productImage: string;
	productImageAlt: string;
	productDescription: string;
	productPrice: number;
	productDate?: string;
}

interface Shoe {
	name: string;
	variants: {
		gallery: { url: string; original_img_url: string; alt: string }[];
	}[];
	price: { regular: Number };
	date: { released: string };
}

const getData = async () => {
	const response = await axios.post(
		'https://vfoof4g2cg-dsn.algolia.net/1/indexes/*/queries?x-algolia-agent=Algolia%20for%20JavaScript%20(4.10.2)%3B%20Browser%20(lite)%3B%20JS%20Helper%20(3.5.3)%3B%20react%20(17.0.2)%3B%20react-instantsearch%20(6.11.2)&x-algolia-api-key=266e68cea9bbc69eeacbe112f46ff2b3&x-algolia-application-id=VFOOF4G2CG',
		{
			requests: [
				{
					indexName: 'production_tss_order_release_date_asc',
					params:
						'highlightPreTag=%3Cais-highlight-0000000000%3E&highlightPostTag=%3C%2Fais-highlight-0000000000%3E&filters=type%3Aproduct%20AND%20sub_type%3Asneaker&hitsPerPage=36&userToken=967b7c7374dc1d05&clickAnalytics=true&query=&maxValuesPerFacet=9999&numericFilters=%5B%22date.released%3E1625946316%22%5D&page=0&facets=%5B%22taxonomy.brand%22%2C%22taxonomy.collection%22%2C%22taxonomy.sub_brand%22%5D&tagFilters=',
				},
				{
					indexName: 'production_tss',
					params:
						'highlightPreTag=%3Cais-highlight-0000000000%3E&highlightPostTag=%3C%2Fais-highlight-0000000000%3E&filters=type%3Aadvert%20AND%20placement%3Arelease-dates&hitsPerPage=2&userToken=967b7c7374dc1d05&clickAnalytics=true&query=&maxValuesPerFacet=9999&numericFilters=%5B%22date.released%3E1625946316%22%5D&page=0&facets=%5B%22taxonomy.brand%22%2C%22taxonomy.collection%22%2C%22taxonomy.sub_brand%22%5D&tagFilters=',
				},
			],
		}
	);
	return { status: 'success', results: response?.data?.results[0]?.hits };
};

app.get('/', async (req, res) => {
	try {
		let scrapedData = await getData();
		let shoes = scrapedData?.results;
		const formattedShoes: Shoes[] = shoes.map((shoe: Shoe) => {
			return {
				productLink: shoe?.variants[0]?.gallery[0]?.url,
				productImage: shoe?.variants[0]?.gallery[0]?.original_img_url,
				productImageAlt: shoe?.variants[0]?.gallery[0]?.alt,
				productDescription: shoe?.name,
				productPrice: shoe?.price?.regular,
				productDate: new Date(shoe?.date?.released).toLocaleDateString('en-UK'),
			};
		});
		res.send({ shoes: formattedShoes });
	} catch (e) {
		console.log(e);
	}
});

app.listen(process.env.PORT || 3001, () => {
	console.log('server started');
});
