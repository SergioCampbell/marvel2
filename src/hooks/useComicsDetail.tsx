import getComic from "../services/getComic.service";

export default function useComicsDetail (resourceURI: string) {
	const comicId = resourceURI;
	const id = comicId.split("/").pop();
	const comics = getComic(id!);

	return comics;
}