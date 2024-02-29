import "./App.css";
import { useLikes } from "./context/globalStateContext";
import { Content } from "./components/items/Content";
import Navbar from "./components/navigation/Navbar";
import { Search } from "./components/navigation/Search";
import { data } from "./utils/charactersList";
import { Result } from "interfaces/characters.interface";
import { useState, useEffect } from "react";

function App() {
	const { likedCards } = useLikes();
	
	const [search, setSearch] = useState<string>("");

	const [searchResults, setSearchResults] = useState<Result[]>([]);

	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value);
	};

	useEffect(() => {
		const results = data.data.results.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));
		setSearchResults(results);
	}, [search]);

	return (
		<main>
			<Navbar likes={likedCards.length} />
			<section className="section">
				<Search handleSearch={handleSearch} search={search} searchResults={searchResults} />
				<Content searchResults={searchResults} />
			</section>
		</main>
	);
}

export default App;
