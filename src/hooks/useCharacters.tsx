/* eslint-disable @typescript-eslint/no-explicit-any */
import getAllCharacters from "@/services/getAllCharacters.service";

export default function useCharacters() {
	const character = getAllCharacters();
	return character;

}