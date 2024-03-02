import { ComicsT } from "../interfaces/comic.interface";
import { useState, useEffect } from "react";

function useComicDetailsList(comicDetails: ComicsT) {
	const [simplifiedArray, setSimplifiedArray] = useState<ComicsT>([]);

	useEffect(() => {
		const simplified = comicDetails.flat().map(comic => ({
			id: comic.id,
			digitalId: comic.digitalId,
			title: comic.title,
			issueNumber: comic.issueNumber,
			variantDescription: comic.variantDescription,
			description: comic.description,
			modified: comic.modified,
			isbn: comic.isbn,
			upc: comic.upc,
			diamondCode: comic.diamondCode,
			ean: comic.ean,
			issn: comic.issn,
			format: comic.format,
			pageCount: comic.pageCount,
			textObjects: comic.textObjects,
			resourceURI: comic.resourceURI,
			urls: comic.urls,
			series: comic.series,
			variants: comic.variants,
			collections: comic.collections,
			collectedIssues: comic.collectedIssues,
			dates: comic.dates,
			prices: comic.prices,
			thumbnail: comic.thumbnail,
			images: comic.images,
			creators: comic.creators,
			characters: comic.characters,
			stories: comic.stories,
			events: comic.events
		}));
		setSimplifiedArray(simplified);
	}, [comicDetails]);

	return simplifiedArray;
}

export default useComicDetailsList;
