import { SearchIcon } from "../../style/SearchIcon";
import { Result } from "interfaces/characters.interface";

interface SearchResultsProps {
	searchResults: Result[];
	handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
	search?: string;
	setSearch?: () => void;
}

export const Search = ({searchResults, handleSearch}: SearchResultsProps) => {

	return (
		<div className="search">
			<div className="searchInputContainer">
				<SearchIcon />
				<input className="searchInput"
					type="text"
					placeholder="SEARCH A CHARACTER..."
					onChange={handleSearch}
				/>
			</div>
			<hr className="searchLine" />
			<p className="searchText">{searchResults.length ? `${searchResults.length} RESULTS` : "0 RESULTS"}</p>
		</div>
	);
};
