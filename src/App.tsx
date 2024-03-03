import "./App.css";
import { useLikes } from "./context/globalStateContext";
import Navbar from "./components/navigation/Navbar";
import { Route, Routes } from "react-router-dom";
import CharacterList from "./routes/characterList";
import { Search } from "./components/navigation/Search";
import FavoriteList from "./routes/favoriteList";
import CharacterDetails from "./routes/CharacterDetails";
import Loader from "./components/Lodaders";
import useCharacters from "./hooks/useCharacters";

function App() {
	const { likedCards } = useLikes();
	const { handleSearch, searchResults } = useCharacters();

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
							<Search handleSearch={handleSearch} searchResults={searchResults} />
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
