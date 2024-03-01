import md5 from "md5";

export default async function getAllCharacters() {
	const apiUrl = import.meta.env.VITE_API_URL;
	const publicKey = import.meta.env.VITE_PUBLIC_KEY;
	const privateKey = import.meta.env.VITE_PRIVATE_KEY;

	if (!apiUrl) {
		throw new Error("API_URL is not defined");
	}

	const ts = Date.now();
	const cifrate = md5(ts + privateKey + publicKey);

	const API = `${apiUrl}?&limit=50&ts=${ts}&apikey=${publicKey}&hash=${cifrate}`;

	try {
		const response = await fetch(API);
		if (!response.ok) {
			throw new Error("Failed to fetch characters");
		}
		const all = await response.json();
		// console.log(all.data.results);
		return all.data.results;
	} catch (error) {
		console.error("Error fetching characters:", error);
		throw error;
	}
}
