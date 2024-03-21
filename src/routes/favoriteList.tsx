import { Search } from "../components/navigation/Search";
import { useLikes } from "../context/globalStateContext";
import { HeartIcon } from "../style/HeartIcon";
import { Link, Outlet } from "react-router-dom";
import useCharacters from "../hooks/useCharacters";

export default function FavoriteList() {
	const { likedCards, removeLike } = useLikes();
	const { handleSearch, searchResults } = useCharacters();
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
						<div className="characters" key={character.id}>
							<img
								src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
								alt={character.name}
								width={188}
								height={189}
								className="characterImage"
							/>
							<div className="characterName">
								<Link to={`/character-details/${character.id}`}
									style={{display: "flex", alignItems: "center", textDecoration: "none", color: "var(--color_white)"}}>
									<p
										style={{
											fontSize: 12,
											fontWeight: 600,
											textOverflow: "ellipsis",
											whiteSpace: "nowrap",
											overflow: "hidden",
										}}
									>
										{character.name}
									</p>
								</Link>
								<button
									className="like"
									onClick={() => removeLike(character)}
								>
									<HeartIcon width={12} />
								
								</button>
							</div>
						</div>
					))}
				<Outlet />
			</div>
		</section>
	);
}