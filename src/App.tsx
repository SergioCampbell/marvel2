import "./App.css";
import { useLikes } from "./context/globalStateContext";
import Navbar from "./components/navigation/Navbar";
import { Route, Routes } from "react-router-dom";
import CharacterList from "./routes/characterList";
import { useEffect, useState } from "react";
import { Search } from "./components/navigation/Search";
import { Result } from "./interfaces/characters.interface";
import { data } from "./utils/charactersList";
import FavoriteList from "./routes/favoriteList";

function App() {
	const [search, setSearch] = useState<string>("");
	const { likedCards } = useLikes();

	const [searchResults, setSearchResults] = useState<Result[]>([]);
	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value);
	};

	useEffect(() => {
		const results = data.data.results.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));
		setSearchResults(results);
	}, [search]);

	return (
		<main test-id="App">
			<Navbar likes={likedCards.length} />
			<Search handleSearch={handleSearch} search={search} searchResults={searchResults} />
			<Routes>
				<Route path="/" element={<CharacterList searchResults={searchResults} />} />
				<Route path="/favorites-list" element={<FavoriteList />} />
				<Route
					path="/character-details/:id"
					element={<Navbar likes={likedCards.length} />}
				/>
			</Routes>
		</main>
	);
}

export default App;
