/* eslint-disable @typescript-eslint/no-explicit-any */
import { useLocation } from "react-router-dom";
import { Result } from "../interfaces/characters.interface";
import getAllCharacters from "../services/getAllCharacters.service";
import { useState, useEffect } from "react";

export default function useCharacters() {
	const [search, setSearch] = useState<string>("");
	const location = useLocation();
  
	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		setTimeout(() => {
			setSearch(e.target.value);
		}, 2000);
	};

	const [searchResults, setSearchResults] = useState<Result[]>([]);

	useEffect(() => {
		getAllCharacters(search).then((data) => {
			const results = data.filter((item: { name: string }) =>
				item.name.toLowerCase().includes(search.toLowerCase())
			);
			setSearchResults(results);
		});
	}, [search]);

	useEffect(() => {
		setSearchResults([]);
		setSearch("");
	}, [location.pathname]);
	

	return { search, handleSearch, searchResults };
}