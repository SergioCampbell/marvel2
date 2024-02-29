import Navbar from "@/components/navigation/Navbar";
import { render } from "@testing-library/react";

describe("Render navbar", () => {
	it("renders a heading", () => {
		render(<Navbar/>);
	});
});