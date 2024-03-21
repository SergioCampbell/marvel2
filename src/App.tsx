import "./App.css";
import { useLikes } from "./context/globalStateContext";
import Navbar from "./components/navigation/Navbar";
import { Route, Routes } from "react-router-dom";
import CharacterList from "./routes/characterList";
import FavoriteList from "./routes/favoriteList";
import CharacterDetails from "./routes/CharacterDetails";
import Loader from "./components/Loaders";

function App() {
	const { likedCards } = useLikes();

	return (
		<main test-id="App">
			<Navbar likes={likedCards.length} />
			<Routes>
				<Route loader={() => <Loader />} path="*" element={
					<>
						<CharacterList />
					</>
				} />
				<Route
					loader={() => <Loader />}
					path="/favorites-list" element={
						<>
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
