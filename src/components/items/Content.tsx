import { useLikes } from "../../context/globalStateContext";
import { HeartIcon } from "../../style/HeartIcon";
import { UnselectedHeartIcon } from "../../style/UnselectedHeartIcon";
import { Result } from "../../interfaces/characters.interface";
import { Outlet } from "react-router-dom";

type SearchResultsProps = {
  searchResults: Result[];
};

export const Content = ({searchResults}: SearchResultsProps) => {
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

	return (
		<section className="characterList">
			{searchResults.map((character) => (
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
							onClick={() => handleLikeClick(character)}
						>
							{isCharacterLiked(character) ? (
								<HeartIcon width={12} />
							) : (
								<UnselectedHeartIcon width={12} />
							)}
						</button>
					</div>
				</div>
			))}
			<Outlet />
		</section>
	);
};
