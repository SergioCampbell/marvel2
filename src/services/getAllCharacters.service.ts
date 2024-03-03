import md5 from "md5";

export default async function getAllCharacters(name?: string) {
	console.log("🚀 ~ getAllCharacters ~ name:", name);
	const apiUrl = import.meta.env.VITE_API_URL;
	const publicKey = import.meta.env.VITE_PUBLIC_KEY;
	const privateKey = import.meta.env.VITE_PRIVATE_KEY;

	if (!apiUrl) {
		throw new Error("API_URL is not defined");
	}

	const ts = Date.now();
	const cifrate = md5(ts + privateKey + publicKey);

	let API = "";

	if (name === "") {
		API = `${apiUrl}?&limit=50&ts=${ts}&apikey=${publicKey}&hash=${cifrate}`;
	} else {
		API = `${apiUrl}?name=${name}&limit=50&ts=${ts}&apikey=${publicKey}&hash=${cifrate}`;
	}

	try {
		const response: Response = await new Promise((resolve) => setTimeout(() => resolve(fetch(API)), 1200));
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
