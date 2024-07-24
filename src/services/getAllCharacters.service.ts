/* eslint-disable @typescript-eslint/no-explicit-any */
import md5 from "md5";

export default async function getAllCharacters(name?: string, signal?: AbortSignal) {
	const {
		VITE_API_URL: apiUrl,
		VITE_PUBLIC_KEY: publicKey,
		VITE_PRIVATE_KEY: privateKey } = import.meta.env;

	if (!apiUrl || !publicKey || !privateKey) {
		throw new Error("API_URL, PUBLIC_KEY, or PRIVATE_KEY is not defined");
	}

	const ts = Date.now();
	const hash = md5(ts + privateKey + publicKey);
	const limit = 10;
	const API = `${apiUrl}?orderBy=modified&limit=${limit}&ts=${ts}&apikey=${publicKey}&hash=${hash}${name ? `&nameStartsWith=${name}` : ""}`;

	try {
		const response: Response = await fetch(API, { signal });
		if (!response.ok) {
			const errorDetails = await response.text();
			throw new Error(`Failed to fetch characters: ${response.status} ${response.statusText} - ${errorDetails}`);
		}
		const all = await response.json();
		return all.data.results;
	} catch (error: any) {
		if (error.name === "AbortError") {
			console.error("Request was aborted");
		}
		console.error("Error fetching characters:", error);
		throw error;
	}
}
