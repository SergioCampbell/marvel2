module.exports = {
	preset: "ts-jest",
	testEnvironment: "jsdom",
	moduleNameMapper: {
		"\\.(css|less|scss|sass)$": "identity-obj-proxy",
	},
	transform: {
		"^.+\\.(ts|tsx)$": "ts-jest",
	},
	testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
	moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
	setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
};