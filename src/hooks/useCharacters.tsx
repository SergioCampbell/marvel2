/* eslint-disable @typescript-eslint/no-explicit-any */
import { useLocation } from "react-router-dom";
import { Result } from "../interfaces/characters.interface";
import getAllCharacters from "../services/getAllCharacters.service";
// import getAllCharacters from "../fakeData.json";
import { useState, useEffect } from "react";

export default function useCharacters() {
	const [search, setSearch] = useState<string>("");
	const location = useLocation();
  
	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		const searchValue = e.target.value;
		setSearchValue(searchValue);
	};

	const [searchValue, setSearchValue] = useState<string>("");
	
	useEffect(() => {
		const timer = setTimeout(() => {
			setSearch(searchValue);
		}, 800);
	
		return () => clearTimeout(timer);
	}, [searchValue]);
	

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