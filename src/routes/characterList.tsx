import { Content } from "../components/items/Content";
import { Result } from "../interfaces/characters.interface";
interface SearchResultsProps {
    searchResults: Result[];
}

export default function CharacterList({searchResults}: SearchResultsProps) {

	return (
		<section className="section">
			<Content searchResults={searchResults} />
		</section>
	);
}