import React, { createContext, useContext, useMemo, useState, useCallback } from "react";

/**
 * @typedef {Object} Note
 * @property {string} id
 * @property {string} title
 * @property {string} content
 * @property {number} updatedAt
 */

const NotesContext = createContext(null);

function createId() {
  // Sufficient for in-memory scaffolding; can be replaced with uuid later.
  return `${Date.now()}_${Math.random().toString(16).slice(2)}`;
}

function now() {
  return Date.now();
}

/**
 * Seed with a couple of placeholder notes so the list doesn't look empty.
 * Users can still delete them; no persistence yet.
 */
const initialNotes = [
  {
    id: "welcome",
    title: "Welcome to Personal Notes",
    content:
      "This is a scaffolded notes app UI.\n\n• Create notes\n• Edit notes\n• Delete notes\n\nPersistence will be added later.",
    updatedAt: now(),
  },
  {
    id: "tips",
    title: "Tips",
    content:
      "Try resizing the window—on small screens, the layout stacks.\n\nKeyboard:\n- Tab to focus inputs\n- Use visible focus rings for accessibility",
    updatedAt: now() - 1000 * 60 * 20,
  },
];

// PUBLIC_INTERFACE
export function NotesProvider({ children }) {
  /** Notes are stored in-memory only for now. */
  const [notes, setNotes] = useState(initialNotes);
  const [selectedNoteId, setSelectedNoteId] = useState(initialNotes[0]?.id ?? null);

  const selectedNote = useMemo(
    () => notes.find((n) => n.id === selectedNoteId) ?? null,
    [notes, selectedNoteId]
  );

  // PUBLIC_INTERFACE
  const createNote = useCallback(() => {
    const newNote = {
      id: createId(),
      title: "Untitled note",
      content: "",
      updatedAt: now(),
    };

    setNotes((prev) => [newNote, ...prev]);
    setSelectedNoteId(newNote.id);
    return newNote.id;
  }, []);

  // PUBLIC_INTERFACE
  const selectNote = useCallback((id) => {
    setSelectedNoteId(id);
  }, []);

  // PUBLIC_INTERFACE
  const updateNote = useCallback((id, patch) => {
    setNotes((prev) =>
      prev.map((n) => {
        if (n.id !== id) return n;
        return {
          ...n,
          ...patch,
          updatedAt: now(),
        };
      })
    );
  }, []);

  // PUBLIC_INTERFACE
  const deleteNote = useCallback(
    (id) => {
      setNotes((prev) => prev.filter((n) => n.id !== id));
      setSelectedNoteId((prevSelected) => {
        if (prevSelected !== id) return prevSelected;
        // Select first remaining note, if any
        const remaining = notes.filter((n) => n.id !== id);
        return remaining[0]?.id ?? null;
      });
    },
    [notes]
  );

  const value = useMemo(
    () => ({
      notes,
      selectedNoteId,
      selectedNote,
      createNote,
      updateNote,
      deleteNote,
      selectNote,
    }),
    [notes, selectedNoteId, selectedNote, createNote, updateNote, deleteNote, selectNote]
  );

  return <NotesContext.Provider value={value}>{children}</NotesContext.Provider>;
}

// PUBLIC_INTERFACE
export function useNotes() {
  /** Hook for consuming the notes state and actions. */
  const ctx = useContext(NotesContext);
  if (!ctx) {
    throw new Error("useNotes must be used within a NotesProvider");
  }
  return ctx;
}
