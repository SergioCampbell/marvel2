import { useLikes } from "../../context/globalStateContext";
import { HeartIcon } from "../../style/HeartIcon";
import { UnselectedHeartIcon } from "../../style/UnselectedHeartIcon";
import { Result } from "../../interfaces/characters.interface";

type SearchResultsProps = {
  searchResults: Result[];
};

export const Content = ({searchResults}: SearchResultsProps) => {
	console.log("🚀 ~ Content ~ searchResults:", searchResults);
	const { likedCards, addLike, removeLike } = useLikes();

	const isCharacterLiked = (characterName: string) => {
		return likedCards.includes(characterName);
	};

	const handleLikeClick = (characterName: string) => {
		if (isCharacterLiked(characterName)) {
			removeLike(characterName);
		} else {
			addLike(characterName);
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
							onClick={() => handleLikeClick(character.name)}
						>
							{isCharacterLiked(character.name) ? (
								<HeartIcon width={12} />
							) : (
								<UnselectedHeartIcon width={12} />
							)}
						</button>
					</div>
				</div>
			))}
		</section>
	);
};
