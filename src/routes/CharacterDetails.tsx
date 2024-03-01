import { useEffect, useState } from "react";
import getCharacterDetail from "../services/getCharacter.service";
import { useParams } from "react-router-dom";
import { Result } from "../interfaces/characters.interface";
import { characterDetail } from "../utils/characterDetail";
import { HeartIcon } from "../style/HeartIcon";
import { UnselectedHeartIcon } from "../style/UnselectedHeartIcon";
import ComicsList from "../components/items/ComicsList";

export default function CharacterDetails({likes}: {likes?: number}) {
	const { characterId } = useParams();

	const [character, setCharacter] = useState<Result>();
	console.log("🚀 ~ CharacterDetails ~ character:", character);

	// const data = getCharacterDetail(characterId ? characterId : "");

	useEffect(() => {
		// data.then((data) => {
		// 	setCharacter(data);
		// });
		return setCharacter(characterDetail.data.results[0]);
	}, []);

	if (!character) {
		return <div>Loading...</div>;
	}

	return (
		<div style={{ color: "var(--color_black)" }}>
			<header className="characterDetail">
				<img src={`${character.thumbnail?.path}/standard_fantastic.${character.thumbnail?.extension}`} />
				<div className="characterInfo">
					<div style={{display: "flex", alignItems: "center", marginLeft: 30}}>
						<h1 style={{marginRight: 30}}>{character.name}</h1>
						{likes !== 0 ? (<><HeartIcon /> {likes}</>) : <UnselectedHeartIcon />}
					</div>
					<p>{character.description || "No description"}</p>
				</div>
			</header>
			<article className="comicsList">
				<h2 style={{color: "var(--color_black)"}}>Comics</h2>
				<ComicsList searchResults={character.comics.items} />
			</article>
		</div>
	);
}