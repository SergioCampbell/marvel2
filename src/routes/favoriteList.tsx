import { useLikes } from "../context/globalStateContext";
import { HeartIcon } from "../style/HeartIcon";
import { Outlet } from "react-router-dom";

export default function FavoriteList() {
	const { likedCards, removeLike } = useLikes();
	return (
		<section className="section">
			<h1 style={{color: "var(--color_black)"}}>Favorite List</h1>
			<div className="characterList">
				{likedCards.map((character) => (
					<div className="characters" key={character.id}>
						<img
							src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
							alt={character.name}
							width={188}
							height={189}
							className="characterImage"
						/>
						<div className="characterName">
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