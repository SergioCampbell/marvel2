import { useEffect } from "react";
import { useLikes } from "../../context/globalStateContext";
import { Result } from "../../interfaces/characters.interface";
import CardContent from "./CardContent";

type SearchResultsProps = {
	searchResults: Result[];
	isLoading: boolean;
};

export const Content = ({ searchResults, isLoading }: SearchResultsProps) => {
	const { likedCards, addLike, removeLike } = useLikes();

	const isCharacterLiked = (character: Result) => {
		return likedCards.includes(character);
	};

	const handleLikeClick = (character: Result) => {
		if (isCharacterLiked(character)) {
			removeLike(character);
		} else {
			addLike(character);
		}
	};

	useEffect(() => {
		
	}, [searchResults]);

	if (isLoading) {
		return <p style={{ color: "var(--color_black)" }}>Loading character list...</p>;
	}

	if (searchResults.length === 0) {
		<p style={{ color: "var(--color_black)" }}>
					No results found <br />
			<i>Try again with another search</i>
		</p>;
	}

	return (
		<section className="characterList">
			{
				searchResults.map((character) => (
					<CardContent
						key={character.id}
						character={character}
						handleLikeClick={handleLikeClick}
						isCharacterLiked={isCharacterLiked}
					/>
				))}
		</section>
	);
};
