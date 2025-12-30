# Personal Notes (Frontend)

A lightweight React UI scaffold for a personal notes app, styled with the **Ocean Professional** theme (primary `#2563EB`, accent `#F59E0B`).

## Getting Started

From `notes_frontend/`:

```bash
npm install
npm start
```

Open http://localhost:3000

## Current Scaffold Features

- **Routing (react-router-dom)**
  - `/` Home (Notes list + editor)
  - `/about` About page
  - `*` NotFound (404)
- **Global UI Shell**
  - Sticky top navigation with app name: **Personal Notes**
  - Modern minimalist styling: subtle shadows, rounded corners, soft gradient background
- **Notes UI**
  - Two-panel responsive layout (stacks on smaller screens)
  - `NotesList` with placeholder list item template + empty state
  - `NoteEditor` with accessible title + content inputs
- **State scaffolding**
  - `NotesContext` provides in-memory notes and actions:
    - `createNote`, `updateNote`, `deleteNote`, `selectNote`
  - No backend integration and no persistence yet

## Environment Variables

This scaffold does not require any backend. If you later add integrations, read variables safely via `process.env.REACT_APP_*`.
No `REACT_APP_*` variables are required to run the app currently.
