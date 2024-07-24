/* eslint-disable react-hooks/rules-of-hooks */
import { ComicsT } from "../../interfaces/comic.interface";
import useComicsDetail from "../../hooks/useComicsDetail";
import { Comics } from "../../interfaces/characters.interface";
import { useEffect, useState } from "react";
import useComicDetailsList from "../../hooks/useSimplified";
import Loader from "../Loaders";

interface ComicsListProps {
	comics: Comics;
}

export default function ComicsList({ comics }: ComicsListProps) {
	const [comicDetails, setComicDetails] = useState<ComicsT>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const simplifiedArray = useComicDetailsList(comicDetails);

	useEffect(() => {
		setIsLoading(true);
		if (comics.items.length === 0) {
			setIsLoading(false);
			return;
		}
		const fetchComicDetails = async () => {
			const detailsPromises = comics.items.map(comic => useComicsDetail(comic.resourceURI));
			const details = await Promise.all(detailsPromises);
			setIsLoading(false);
			setComicDetails(details);
		};

		if (comics.items.length > 0) {
			fetchComicDetails();
		}
	}, [comics]);

	if (isLoading) return (
		<>
			<Loader />
			<p>Loading comics...</p>
		</>);

	return (
		<div className="comics">
			{comics.items.length !== 0 ? comics.items.map((comic, index) => (
				<div key={comic.name} className="comicDisplay">
					{simplifiedArray[index] && simplifiedArray[index].thumbnail && (
						<>
							<img
								src={`${simplifiedArray[index]?.thumbnail?.path}/portrait_fantastic.${simplifiedArray[index]?.thumbnail?.extension}`}
								alt={simplifiedArray[index].title}
							/>
							<p className="comicDisplayName">{comic.name}</p>
							<p style={{ fontSize: 12, margin: 0 }}>
								{simplifiedArray[index].dates.map(date => {
									const formattedDate = new Date(date.date);
									const year = formattedDate.getFullYear();
									return year;
								}).join(", ")}
							</p>
						</>
					)}
				</div>
			)) : <p>No comics available for this character</p>}
		</div>
	);
}
