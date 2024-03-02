import Loader from "../components/Lodaders";
import { Content } from "../components/items/Content";
import { Result } from "../interfaces/characters.interface";
interface SearchResultsProps {
    searchResults: Result[];
}

export default function CharacterList({searchResults}: SearchResultsProps) {

	return (
		<section className="section">
			{!searchResults ? <Loader /> : <Content searchResults={searchResults} />}
		</section>
	);
}