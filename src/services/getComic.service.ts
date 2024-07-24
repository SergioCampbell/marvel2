/* eslint-disable @typescript-eslint/no-explicit-any */
import md5 from "md5";

export default async function getComic(comicId: string, signal?: AbortSignal) {
	const {
		VITE_COMIC_URL: apiUrl,
		VITE_PUBLIC_KEY: publicKey,
		VITE_PRIVATE_KEY: privateKey } = import.meta.env;

	if (!apiUrl) {
		throw new Error("API_URL is not defined");
	}

	const ts = Date.now();
	const cifrate = md5(ts + privateKey + publicKey);

	const COMIC_DETAIL = `${apiUrl}/${comicId}?ts=${ts}&apikey=${publicKey}&hash=${cifrate}`;

	try {
		const response = await fetch(COMIC_DETAIL, { signal });
		if (!response.ok) {
			throw new Error("Failed to fetch character");
		}
		const data = await response.json();
		return data.data.results;
	} catch (error: any) {
		if (error.name === "AbortError") {
			console.error("Request was aborted");
		}
		console.error("Error fetching character:", error);
		throw error;
	}
}
