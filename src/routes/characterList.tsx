import useCharacters from "../hooks/useCharacters";
import Loader from "../components/Loaders";
import { Content } from "../components/items/Content";
import { Search } from "../components/navigation/Search";

export default function CharacterList() {
	const { handleSearch, searchResults } = useCharacters();

	return (
		<section className="section">
			<Search handleSearch={handleSearch} searchResults={searchResults} />
			{searchResults.length === 0 ? <Loader /> : <Content searchResults={searchResults} />}
		</section>
	);
}