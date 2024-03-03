# Marvel2 Project ⭐

This repository contains the codebase for the Marvel2 project. Marvel2 is a web application that allows users to explore and interact with Marvel Comics characters and comics. *Feel free to review this repository.*

## Project Structure

The project is organized as follows:

```bash
📁marvel2
├── .env
├── .eslintrc.cjs
├── .gitignore
├── README.md
├── 📁__test__
│   ├── cardList.spec.ts
│   └── rootPage.spec.ts
├── index.html
├── package.json
├── 📁playwright-report
│   └── index.html
├── playwright.config.ts
├── pnpm-lock.yaml
├── 📁public
│   └── vite.svg
├── 📁src
│   ├── App.css
│   ├── App.tsx
│   ├── 📁assets
│   │   └── react.svg
│   ├── 📁components
│   │   ├── Lodaders.tsx
│   │   ├── 📁items
│   │   │   ├── ComicsList.tsx
│   │   │   └── Content.tsx
│   │   └── 📁navigation
│   │       ├── Navbar.tsx
│   │       └── Search.tsx
│   ├── 📁context
│   │   └── globalStateContext.tsx
│   ├── error-page.tsx
│   ├── 📁hooks
│   │   ├── useCharacters.tsx
│   │   ├── useComicsDetail.tsx
│   │   └── useSimplefied.tsx
│   ├── index.css
│   ├── 📁interfaces
│   │   ├── cards.interface.ts
│   │   ├── characters.interface.ts
│   │   ├── comic.interface.ts
│   │   └── content.interface.ts
│   ├── main.tsx
│   ├── 📁routes
│   │   ├── CharacterDetails.tsx
│   │   ├── characterList.tsx
│   │   ├── favoriteList.tsx
│   │   └── root.tsx
│   ├── 📁services
│   │   ├── getAllCharacters.service.ts
│   │   ├── getCharacter.service.ts
│   │   └── getComic.service.ts
│   ├── 📁style
│   │   ├── HeartIcon.tsx
│   │   ├── Loader.css
│   │   ├── Logo.tsx
│   │   ├── SearchIcon.tsx
│   │   ├── UnselectedHeartIcon.tsx
│   │   └── components.module.scss
│   └── 📁utils
│       ├── characterDetail.ts
│       └── charactersList.ts
├── 📁test-results
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## Project Overview

- **.env**: Environment configuration file.
- **.eslintrc.cjs**: ESLint configuration file.
- **.gitignore**: Git ignore file.
- **README.md**: Project documentation.
- ****test**/**: Directory containing Playwright tests.
- **index.html**: HTML entry point for the application.
- **package.json**: npm package configuration file.
- **playwright-report/**: Directory containing Playwright test reports.
- **playwright.config.ts**: Playwright configuration file.
- **pnpm-lock.yaml**: Package lock file.
- **public/**: Directory containing public assets.
- **src/**: Source code directory.
  - **App.css**: CSS file for the main application component.
  - **App.tsx**: Main application component.
  - **assets/**: Directory containing static assets.
  - **components/**: Directory containing React components.
    - **Lodaders.tsx**: Loader component.
    - **items/**: Directory containing item components.
    - **navigation/**: Directory containing navigation components.
  - **context/**: Directory containing React context components.
  - **error-page.tsx**: Error page component.
  - **hooks/**: Directory containing custom React hooks.
  - **index.css**: CSS file for index.html.
  - **interfaces/**: Directory containing TypeScript interfaces.
  - **main.tsx**: Main entry point for the React application.
  - **routes/**: Directory containing React router components.
  - **services/**: Directory containing service functions.
  - **style/**: Directory containing styled components.
  - **utils/**: Directory containing utility functions.
- **test-results/**: Directory containing test result files.
- **tsconfig.json**: TypeScript configuration file.
- **tsconfig.node.json**: TypeScript configuration file for Node.js.
- **vite.config.ts**: Vite configuration file.

## How to Use

1. Clone the repository.
2. Install dependencies using `npm install` or `pnpm install`.

### If you want to use it locally or "development mode"

  1. First validate if you have the .env file in the root folder (if not, please, create the file and add the required variables).
  2. Run the application using `npm dev` or `pnpm dev`.
  3. Go to `localhost:5173` or just click in the url the terminal provide.

### If you want to use the application in "Production mode"

  1. Go to [Marvel 2 app](https://sergiocampbell.com)
  2. Start using.

### Running tests

1. Open a second terminal and run the `npm dev` or `pnpm dev` command *(this is required to run the all the tests)*,
2. Run tests using `npm test` *(this runs a terminal script then generate a report)*.
3. Access Playwright test reports in `playwright-report/` directory.

### Author

Sergio Campbell Dev

Thanks for visit this repository 😊
