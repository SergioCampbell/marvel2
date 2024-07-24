import { Search } from "../components/navigation/Search";
import { useLikes } from "../context/globalStateContext";
import { Outlet } from "react-router-dom";
import useCharacters from "../hooks/useCharacters";
import CardContent from "../components/items/CardContent";
import { Result } from "../interfaces/characters.interface";

export default function FavoriteList() {
	const { likedCards, removeLike } = useLikes();
	const { handleSearch, searchResults } = useCharacters();

	const isCharacterLiked = (character: Result) => {
		return likedCards.includes(character);
	};

	const handleLikeClick = (character: Result) => {
		if (isCharacterLiked(character)) {
			removeLike(character);
		}
	};
	return (
		<section className="section">
			<Search handleSearch={handleSearch} searchResults={searchResults} />
			<h1 style={{color: "var(--color_black)"}}>Favorite List</h1>
			<div className="characterList">
				{likedCards.length === 0 ? 
					<p style={{color: "var(--color_black)"}}>
					No favorite characters
					</p> 
					: 
					likedCards.map((character) => (
						<CardContent
							key={character.id}
							character={character}
							handleLikeClick={handleLikeClick}
							isCharacterLiked={isCharacterLiked}
						/>
					))}
				<Outlet />
			</div>
		</section>
	);
}