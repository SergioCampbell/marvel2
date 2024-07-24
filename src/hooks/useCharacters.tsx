/* eslint-disable @typescript-eslint/no-explicit-any */
import { useLocation } from "react-router-dom";
import { Result } from "../interfaces/characters.interface";
import { useState, useEffect, useCallback } from "react";
import getAllCharacters from "../services/getAllCharacters.service";

export default function useCharacters() {
	const [search, setSearch] = useState<string>("");
	const [searchValue, setSearchValue] = useState<string>("");
	const [searchResults, setSearchResults] = useState<Result[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);
	const location = useLocation();

	const handleSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		const searchInput = e.target.value;
		setSearchValue(searchInput);
	}, []);

	useEffect(() => {
		const timer = setTimeout(() => {
			setSearch(searchValue);
		}, 800);

		return () => clearTimeout(timer);
	}, [searchValue]);

	useEffect(() => {
		const controller = new AbortController();
		const signal = controller.signal;

		if (search) {
			setIsLoading(true);
			getAllCharacters(search, signal)
				.then((data) => {
					const results = data.filter((item: { name: string }) =>
						item.name.toLowerCase().includes(search.toLowerCase())
					);
					setIsLoading(false);
					setSearchResults(results);
					setError(null);
				})
				.catch((err) => {
					console.error("Error fetching characters:", err);
					setError("Failed to fetch characters, please try again later.");
					setIsLoading(false);
				});
		} else {
			setSearchResults([]);
		}

		return () => controller.abort();
	}, [search]);

	useEffect(() => {
		setSearchResults([]);
		setSearch("");
	}, [location.pathname]);

	return { search, handleSearch, searchResults, error, isLoading };
}
