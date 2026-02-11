[![Live Preview](https://img.shields.io/badge/Live-Preview-brightgreen)](https://abdullahboreny.github.io/restaurant/)

Restaurant page project built with JavaScript and Webpack, featuring SPA-like navigation and dynamic DOM rendering.

## How to Run

1. Clone the repository
   ```bash
   git clone <repo-url>
   cd <repo-folder>
   Install dependencies
   npm install
   Start the development server
   npm run dev
   Open the app
   The project will open automatically in your browser (or visit the local URL shown in the terminal).
   ```

## to deploy code to github pages

```bash
git branch gh-pagea
git checkout gh-pages && git merge main --no-edit
npx webpack
git add dist -f && git commit -m "Deployment commit"
git subtree push --prefix dist origin gh-pages
git checkout main`
```
