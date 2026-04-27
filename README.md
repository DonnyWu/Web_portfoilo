# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## Branching & Deployment

This repository uses a simple workflow to keep your source (`main`) separate from the built site served by GitHub Pages (`gh-pages`). Follow these rules and tips:

- Branches
	- `dev`: Primary working branch. Make feature changes here (or create short-lived feature branches from `dev`, e.g. `feature/my-feature`).
	- `main`: Canonical source branch. The repository contains CI workflows that will keep `main` in sync with `dev` when possible.
	- `gh-pages`: Contains the generated static site that GitHub Pages serves.

- Automation behavior
	- On push to `dev` the workflow `.github/workflows/dev-sync.yml` will:
		1. Install dependencies and build the app (`npm run build`).
		2. Publish the `build/` output to the `gh-pages` branch.
		3. Attempt to merge `dev` into `main`. If the merge succeeds it will push to `main`. If there are merge conflicts the workflow will create a pull request for manual resolution.
	- On push to `main` the workflow `.github/workflows/deploy.yml` will also build and publish `build/` to `gh-pages`.

- Important rules & recommendations
	- Do NOT commit `build/` to `main`. `build/` is ignored by `.gitignore` to prevent generated files from polluting source history.
	- Test and build locally before pushing to `dev`:
		- `npm ci`
		- `npm run build`
		- `npx serve -s build` (optional preview)
	- If you want code review / stricter control, enable branch protection on `main`. When protection prevents direct pushes the workflow will open a PR instead, allowing manual review and merge.

- Typical workflow (safe, recommended)
	1. `git checkout dev`
	2. `git checkout -b feature/my-feature`
	3. Make changes, `git add . && git commit -m "feat: ..."`
	4. `git push origin feature/my-feature` and open a PR into `dev` (optional), or push directly to `dev`.
	5. On push to `dev`, the site will be built & deployed automatically; `main` will be updated when the merge is clean.

- Quick commands
	- Switch to `dev`: `git checkout dev`
	- Create a feature branch: `git checkout -b feature/my-feature`
	- Push feature branch: `git push origin feature/my-feature`
	- Trigger deploy (push to `dev`): `git push origin dev`
