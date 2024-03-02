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
import Loader from "./components/Lodaders";

function App() {
	const [search, setSearch] = useState<string>("");
	const { likedCards } = useLikes();

	const [searchResults, setSearchResults] = useState<Result[]>([]);
	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value);
	};

	useEffect(() => {
		getAllCharacters(search).then((data) => {
			const results = data.filter((item: { name: string }) => item.name.toLowerCase().includes(search.toLowerCase()));
			setSearchResults(results);
		});
	}, [search]);

	return (
		<main test-id="App">
			<Navbar likes={likedCards.length} />
			<Routes>
				<Route loader={() => <Loader />} path="*" element={
					<>
						<Search handleSearch={handleSearch} searchResults={searchResults} />
						<CharacterList searchResults={searchResults} />
					</>
				} />
				<Route
					loader={() => <Loader />}
					path="/favorites-list" element={
						<>
							<Search handleSearch={handleSearch} search={search} searchResults={searchResults} />
							<FavoriteList />
						</>
					} />
				<Route
					loader={() => <Loader />}
					path="/character-details/:characterId"
					element={<CharacterDetails />}
				/>
			</Routes>
		</main>
	);
}

export default App;
