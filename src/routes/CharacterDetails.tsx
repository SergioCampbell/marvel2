import { useEffect, useState } from "react";
import getCharacterDetail from "../services/getCharacter.service";
import { useParams } from "react-router-dom";
import { Result } from "../interfaces/characters.interface";
import { HeartIcon } from "../style/HeartIcon";
import { UnselectedHeartIcon } from "../style/UnselectedHeartIcon";
import ComicsList from "../components/items/ComicsList";
import { useLikes } from "../context/globalStateContext";
import Loader from "../components/Loaders";

export default function CharacterDetails() {
	const { characterId } = useParams();
	const [isLoading, setIsLoading] = useState<boolean>(false);

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

	const [character, setCharacter] = useState<Result>();

	const data = getCharacterDetail(characterId ? characterId : "");

	useEffect(() => {
		setIsLoading(true);
		data.then((innerData) => {
			setCharacter(innerData[0]);
			setIsLoading(false);
		});
	}, []);

	if (isLoading) {
		return (
			<>
				<Loader />
				<p>Loading character details...</p>
			</>
		);
	}

	if (!character) {
		return <p style={{ color: "var(--color_black)" }}>No character found</p>;
	}

	return (
		<div style={{ color: "var(--color_black)" }}>
			<header className="characterDetail">
				<img src={`${character.thumbnail?.path}/standard_fantastic.${character.thumbnail?.extension}`} />
				<div className="characterInfo">
					<div className="characterHeader">
						<h1>{character.name.toUpperCase()}</h1>
						<button
							className="like"
							onClick={() => handleLikeClick(character)}
						>
							{isCharacterLiked(character) ? (
								<HeartIcon />
							) : (
								<UnselectedHeartIcon />
							)}
						</button>
					</div>
					<p style={{ margin: 20 }}>{character.description || "No description available for this character"}</p>
				</div>
			</header>
			<article className="comicsList">
				<h2 style={{ color: "var(--color_black)", fontSize: 32 }}>Comics</h2>
				<ComicsList comics={character.comics} />
			</article>
		</div>
	);
}