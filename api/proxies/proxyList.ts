import axios from 'axios';

export const getProxyList = async () => {
	const proxies = (
		await axios.get(
			'https://proxylist.geonode.com/api/organdasn?limit=100&page=1'
		)
	)?.data?.data;

	const getRandomProxy = Math.floor(Math.random() * (99 - 0 + 1)) + 0;

	return proxies[getRandomProxy];
};
