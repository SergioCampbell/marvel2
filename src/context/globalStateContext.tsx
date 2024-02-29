/* eslint-disable react-refresh/only-export-components */
import { Result } from "../interfaces/characters.interface";
import React, { createContext, useContext, useState } from "react";

type LikesContextType = {
  likedCards: Result[];
  addLike: (card: Result) => void;
  removeLike: (cardId: Result) => void;
};

interface LikesProviderProps {
  children: React.ReactNode;
}

const LikesContext = createContext<LikesContextType | undefined>(undefined);

export const useLikes = () => {
	const context = useContext(LikesContext);
	if (!context) {
		throw new Error("useLikes must be used within a LikesProvider");
	}
	return context;
};

export const LikesProvider: React.FC<LikesProviderProps> = ({ children }) => {
	const [likedCards, setLikedCards] = useState<Result[]>([]);

	const addLike = (card: Result) => {
		setLikedCards((prevLikedCards) => [...prevLikedCards, card]);
	};

	const removeLike = (card: Result) => {
		setLikedCards((prevLikedCards) => prevLikedCards.filter((id) => id !== card));
	};

	return (
		<LikesContext.Provider value={{ likedCards, addLike, removeLike }}>
			{children}
		</LikesContext.Provider>
	);
};
