import express from 'express';
import axios from 'axios';

const app = express();

interface Shoe {
	productLink: string | undefined;
	productImage: string | undefined;
	productDescription: string | undefined;
	productPrice: number | undefined;
	productDate?: string | undefined;
}

const getScrapedData = async () => {
	const response = await axios.post(
		'https://vfoof4g2cg-1.algolianet.com/1/indexes/*/queries?x-algolia-agent=Algolia%20for%20JavaScript%20(4.10.2)%3B%20Browser%20(lite)%3B%20JS%20Helper%20(3.5.3)%3B%20react%20(17.0.2)%3B%20react-instantsearch%20(6.11.2)&x-algolia-api-key=266e68cea9bbc69eeacbe112f46ff2b3&x-algolia-application-id=VFOOF4G2CG',
		{
			requests: [
				{
					indexName: 'production_tss_order_menu_order',
					params:
						'highlightPreTag=%3Cais-highlight-0000000000%3E&highlightPostTag=%3C%2Fais-highlight-0000000000%3E&filters=type%3Aproduct%20AND%20sub_type%3Asneaker&hitsPerPage=36&userToken=967b7c7374dc1d05&clickAnalytics=true&query=&maxValuesPerFacet=9999&page=0&facets=%5B%22taxonomy.brand%22%2C%22taxonomy.collection%22%2C%22taxonomy.sub_brand%22%5D&tagFilters=',
				},
				{
					indexName: 'production_tss',
					params:
						'highlightPreTag=%3Cais-highlight-0000000000%3E&highlightPostTag=%3C%2Fais-highlight-0000000000%3E&filters=type%3Aadvert%20AND%20placement%3Arelease-dates&hitsPerPage=2&userToken=967b7c7374dc1d05&clickAnalytics=true&query=&maxValuesPerFacet=9999&page=0&facets=%5B%22taxonomy.brand%22%2C%22taxonomy.collection%22%2C%22taxonomy.sub_brand%22%5D&tagFilters=',
				},
			],
		}
	);
	console.log(response?.data);
};

app.get('/', async (req, res) => {
	try {
		getScrapedData();
	} catch (e) {
		console.log(e);
	}
});

app.listen(process.env.PORT || 3001, () => {
	console.log('server started');
});
