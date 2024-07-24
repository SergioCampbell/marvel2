
import { Result } from "interfaces/characters.interface";
import { HeartIcon } from "../../style/HeartIcon";
import { UnselectedHeartIcon } from "../../style/UnselectedHeartIcon";
import { Link } from "react-router-dom";

interface Props {
    character: Result;
    handleLikeClick: (character: Result) => void;
    isCharacterLiked: (character: Result) => boolean;
}

export default function CardContent({ character, handleLikeClick, isCharacterLiked }: Props) {
	return (
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
					style={{
						display: "flex",
						alignItems: "center",
						textDecoration: "none",
						color: "var(--color_white)",
						whiteSpace: "nowrap",
						overflow: "hidden",
					}}>
					<p
						style={{
							maxWidth: 130,
							fontSize: 12,
							fontWeight: 600,
							textOverflow: "ellipsis",
						}}
					>
						{character.name}
					</p>
				</Link>
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
	);
}