/* eslint-disable react-hooks/rules-of-hooks */
import { ComicsT } from "../../interfaces/comic.interface";
import useComicsDetail from "../../hooks/useComicsDetail";
import { Comics } from "../../interfaces/characters.interface";
import { useEffect, useState } from "react";
import useComicDetailsList from "../../hooks/useSimplefied";

interface ComicsListProps {
  comics: Comics;
}

export default function ComicsList({ comics }: ComicsListProps) {
	const [comicDetails, setComicDetails] = useState<ComicsT>([]);

	const simplifiedArray = useComicDetailsList(comicDetails);

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
					{simplifiedArray[index] && simplifiedArray[index].thumbnail && (
						<>
							<img
								src={`${simplifiedArray[index]?.thumbnail?.path}/portrait_fantastic.${simplifiedArray[index]?.thumbnail?.extension}`}
								alt={simplifiedArray[index].title}
							/>
							<p className="comicDisplayName">{comic.name}</p>
							<p style={{fontSize: 12, margin: 0}}>
								{simplifiedArray[index].dates.map(date => {
									const formattedDate = new Date(date.date);
									const year = formattedDate.getFullYear();
									return year;
								}).join(", ")}
							</p>
						</>
					)}
				</div>
			))}
		</div>
	);
}
