# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

This repository is configured to publish automatically to GitHub Pages.

1. Push your changes to the `main` branch.
2. GitHub Actions will build the app and publish the generated files to the `gh-pages` branch.
3. In the repository settings, open Pages and set the source to **Deploy from a branch** using the `gh-pages` branch and the `/ (root)` folder.

## Custom domain

The site is configured to use `www.cesarmenegatti.com`.

Configure your DNS like this:

- `www` -> `CNAME` -> `chmenegatti.github.io`
- `@` -> `A` -> `185.199.108.153`
- `@` -> `A` -> `185.199.109.153`
- `@` -> `A` -> `185.199.110.153`
- `@` -> `A` -> `185.199.111.153`

After that:

1. In GitHub, open **Settings > Pages**.
2. Set the custom domain to `www.cesarmenegatti.com`.
3. Enable **Enforce HTTPS** after the DNS check passes.

The workflow also publishes a `404.html` fallback so direct navigation keeps working with the React router on GitHub Pages.
