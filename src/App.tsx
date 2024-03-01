import "./App.css";
import { useLikes } from "./context/globalStateContext";
import Navbar from "./components/navigation/Navbar";
import { Route, Routes } from "react-router-dom";
import CharacterList from "./routes/characterList";
import { useEffect, useState } from "react";
import { Search } from "./components/navigation/Search";
import { Result } from "./interfaces/characters.interface";
import FavoriteList from "./routes/favoriteList";
import CharacterDetails from "./routes/CharacterDetails";
import getAllCharacters from "./services/getAllCharacters.service";

function App() {
	const [search, setSearch] = useState<string>("");
	const { likedCards } = useLikes();

	const [searchResults, setSearchResults] = useState<Result[]>([]);
	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value);
	};

	useEffect(() => {
		getAllCharacters().then((data) => {
			const results = data.filter((item: { name: string }) => item.name.toLowerCase().includes(search.toLowerCase()));
			setSearchResults(results);
		});
	}, [search]);

	return (
		<main test-id="App">
			<Navbar likes={likedCards.length} />
			<Routes>
				<Route path="*" element={
					<>
						<Search handleSearch={handleSearch} search={search} searchResults={searchResults} />
						<CharacterList searchResults={searchResults} />
					</>
				} />
				<Route path="/favorites-list" element={
					<>
						<Search handleSearch={handleSearch} search={search} searchResults={searchResults} />
						<FavoriteList />
					</>
				} />
				<Route
					path="/character-details/:characterId"
					element={<CharacterDetails />}
				/>
			</Routes>
		</main>
	);
}

export default App;
