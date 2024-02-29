import React from "react";
import ReactDOM from "react-dom/client";
import {
	createBrowserRouter,
	RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./routes/root.tsx";
import ErrorPage from "./error-page";
import FavoriteList from "./routes/favoriteList.tsx";
import CharacterDetails from "./routes/CharacterDetails.tsx";
import { LikesProvider } from "./context/globalStateContext.tsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "/favorites-list",
				element: <FavoriteList />,
			},
			{
				path: "/character-details/:id",
				element: <CharacterDetails />,
			}
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<LikesProvider>
			<RouterProvider router={router} />
		</LikesProvider>
	</React.StrictMode>,
);
