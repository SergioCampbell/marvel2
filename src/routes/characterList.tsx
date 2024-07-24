import useCharacters from "../hooks/useCharacters";
import { Content } from "../components/items/Content";
import { Search } from "../components/navigation/Search";
import { DEFAULT_VALUES } from "../utils/charactersList";
import Loader from "../components/Loaders";

export default function CharacterList() {
	const { handleSearch, searchResults, search, error, isLoading } = useCharacters();

	return (
		<section className="section">
			<Search handleSearch={handleSearch} searchResults={searchResults} />
			{isLoading ? <><Loader /> <p>Loading character list...</p></>: null}
			{error && <p style={{ color: "var(--color_black)", display: "flex", justifyContent: "center" }}>{error}</p>}
			{searchResults.length === 0 && search === "" ? <Content isLoading={isLoading} searchResults={DEFAULT_VALUES.data.results} /> : <Content isLoading={isLoading} searchResults={searchResults} />}
		</section>
	);
}