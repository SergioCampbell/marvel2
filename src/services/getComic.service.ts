import md5 from "md5";

export default async function getComic(comicId: string) {
	const apiUrl = import.meta.env.VITE_COMIC_URL;
	const publicKey = import.meta.env.VITE_PUBLIC_KEY;
	const privateKey = import.meta.env.VITE_PRIVATE_KEY;

	if (!apiUrl) {
		throw new Error("API_URL is not defined");
	}

	const ts = Date.now();
	const cifrate = md5(ts + privateKey + publicKey);

	const COMIC_DETAIL = `${apiUrl}/${comicId}?ts=${ts}&apikey=${publicKey}&hash=${cifrate}`;

	try {
		const response = await fetch(COMIC_DETAIL);
		if (!response.ok) {
			throw new Error("Failed to fetch character");
		}
		const data = await response.json();
		// console.log(data.data.results);
		return data.data.results;
	} catch (error) {
		console.error("Error fetching character:", error);
		throw error;
	}
}
