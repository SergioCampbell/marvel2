/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState } from "react";

type LikesContextType = {
  likedCards: string[];
  addLike: (cardId: string) => void;
  removeLike: (cardId: string) => void;
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
	const [likedCards, setLikedCards] = useState<string[]>([]);

	const addLike = (cardId: string) => {
		setLikedCards((prevLikedCards) => [...prevLikedCards, cardId]);
	};

	const removeLike = (cardId: string) => {
		setLikedCards((prevLikedCards) => prevLikedCards.filter((id) => id !== cardId));
	};

	return (
		<LikesContext.Provider value={{ likedCards, addLike, removeLike }}>
			{children}
		</LikesContext.Provider>
	);
};
