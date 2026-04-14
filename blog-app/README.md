# BlogSpace - Frontend Foundation

A React + Vite blog platform with client-side routing.

## Setup

```bash
cd client
npm install
npm run dev
```

## Folder Structure

```
client/
  src/
    components/
      Header.jsx      # Navigation header (reusable layout)
      Footer.jsx      # Footer (reusable layout)
    pages/
      Home.jsx        # Blog post listing
      Login.jsx       # Login form
      Register.jsx    # Registration form
      Dashboard.jsx   # User dashboard with post stats
      NotFound.jsx    # 404 page
    App.jsx           # React Router setup
    main.jsx          # App entry point
    index.css         # Global styles
```

## Routes

| Path        | Page       |
|-------------|------------|
| `/`         | Home       |
| `/login`    | Login      |
| `/register` | Register   |
| `/dashboard`| Dashboard  |
| `*`         | 404 NotFound |

## Tech Stack

- React 18
- Vite
- React Router v6
