---
title: 'Netflix Clone'

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
  - Gaeun Lee

# Author notes (optional)
author_notes:
  - 'Corresponding author'
# {{equal}}

# Schedule page publish date (NOT publication's date).
publishDate: '2024-11-01'

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ['paper-conference']

# Publication name and optional abbreviated publication name.
publication: Web Service Design   
publication_short: Web Service Design

abstract: I developed a Netflix clone website in collaboration with ChatGPT. ChatGPT implemented the frontend while I implemented the backend, and it was deployed through GitHub Pages.

# Summary. An optional shortened abstract.
summary: ''

tags: ['Netflix Clone', 'ChatGPT', 'Frontend', 'Backend', 'GitHub Pages', 'Login', 'Favorites', 'Personal Project']

# Display this page in the Featured widget?
featured: true

---
## 🎬 Netflix Clone Project

A React project implementing home/popular/search/wishlist/authentication (login·signup modal) based on TMDB data. It features an **expandable UI structure** with modal manager, custom hooks, and grid·row components.

---

## ✨ Key Features

* **Banner & Category Rows**: Section-based content exposure with `Banner`, `MovieRow`
* **Search Page**: Keyword-based filtering and grid display
* **Popular Page**: TMDB popular movies collection
* **Wishlist**: Add/remove/duplicate prevention with `useWishlist` hook
* **Authentication Modal**: `LoginModal`, `SignupModal` + `ModalManager`
* **Responsive Styling**: Section-specific styling with individual CSS modules

---

## 🛠 Tech Stack

* **React** (CRA structure)
* **CSS** (Page/component-level style files)
* **TMDB API** (Movie data)
* Custom hooks / Utility functions (`useWishlist`, `tmdb.js`, `URL.js`, `Authentication.js`)

---

## 🚀 Getting Started

### 1) Prerequisites

* **Node.js & npm** installation

### 2) Installation & Run

```bash
# Install packages
npm install

# Start development server
npm start
```

### (Optional) TMDB API Key Setup

If using `src/utils/tmdb.js` or `src/utils/URL.js`, you may need a **TMDB API key** internally.
When using `.env`:

```bash
# .env
REACT_APP_TMDB_API_KEY=your_api_key_here
```

Configure the code to reference `process.env.REACT_APP_TMDB_API_KEY`.

---

## 📁 Project Structure

```
src/
├── 📂 components
│   ├── 📄 Banner.js
│   ├── 📄 Header.js
│   ├── 📄 LoginModal.js
│   ├── 📄 Modal.js
│   ├── 📄 MovieRow.js
│   ├── 📄 PopularPage.js
│   └── 📄 SignupModal.js
├── 📂 pages
│   ├── 📄 PopularPage.js
│   └── 📄 WishlistPage.js
├── 📂 styles
│   ├── 📄 Banner.css
│   ├── 📄 Header.css
│   ├── 📄 LoginModal.css
│   ├── 📄 Modal.css
│   ├── 📄 MovieRow.css
│   ├── 📄 PopularPage.css
│   ├── 📄 SignupModal.css
│   └── 📄 WishlistPage.css
├── 📂 utils
│   ├── 📄 Authentication.js
│   ├── 📄 tmdb.js
│   └── 📄 URL.js
├── 📄 App.css
├── 📄 App.js
├── 📄 App.test.js
├── 📄 index.css
├── 📄 index.js
├── 📄 logo.svg
├── 📄 reportWebVitals.js
└── 📄 setupTests.js
```

## 📸 Project Screenshots

{{< photo_album album="넷플릭스클론" count="3" >}}