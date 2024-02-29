import { useRouteError } from "react-router-dom";

import Navbar from "./components/navigation/Navbar.tsx";

export default function ErrorPage() {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const error = useRouteError() as any;
	console.error(error);

	return (
		<>
			<Navbar likes={0} />
			<div className="error-page" id="error-page">
				<h1>Oops!</h1>
				<p>Sorry, an unexpected error has occurred.</p>
				<p>
					<i>{error.statusText || error.message}</i>
				</p>
			</div>
		</>
	);
}