/* eslint-disable react-hooks/rules-of-hooks */
import useComicsDetail from "../../hooks/useComicsDetail";
import { Comics, Result } from "../../interfaces/characters.interface";
import { useEffect, useState } from "react";

interface ComicsListProps {
  comics: Comics;
}

export default function ComicsList({ comics }: ComicsListProps) {
	const [comicDetails, setComicDetails] = useState<Result[]>([]);

	useEffect(() => {
		const fetchComicDetails = async () => {
			const detailsPromises = comics.items.map(comic => useComicsDetail(comic.resourceURI));
			const details = await Promise.all(detailsPromises);
			setComicDetails(details);
		};

		if (comics.items.length > 0) {
			fetchComicDetails();
		}
	}, [comics]);

	if (!comics || comics.items.length === 0) {
		return <div>No data</div>;
	}

	return (
		<div className="comics">
			{comics.items.map((comic, index) => (
				<div key={comic.name} className="comicDisplay">
					{comicDetails[index] && (
						<img
							src={`${comicDetails[index]?.thumbnail?.path}/standard_fantastic.${comicDetails[index]?.thumbnail?.extension}`}
							alt={comicDetails[index].name}
						/>
					)}
					<p>{comic.name}</p>
				</div>
			))}
		</div>
	);
}
