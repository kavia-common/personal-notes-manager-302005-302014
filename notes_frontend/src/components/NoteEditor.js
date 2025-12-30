import React from "react";
import { useNotes } from "../context/NotesContext";
import EmptyState from "./EmptyState";

// PUBLIC_INTERFACE
export default function NoteEditor() {
  /** Right panel editor for the selected note. */
  const { selectedNote, selectedNoteId, updateNote, createNote } = useNotes();

  if (!selectedNote || !selectedNoteId) {
    return (
      <EmptyState
        title="Select a note to start editing"
        description="Choose a note from the list, or create a new one."
        action={
          <button className="btn btnPrimary" onClick={createNote} type="button">
            New note
          </button>
        }
      />
    );
  }

  return (
    <div>
      <div className="PanelHeader">
        <h2 className="PanelTitle">Editor</h2>
        <span className="SubtleBadge">Local-only</span>
      </div>

      <div style={{ display: "grid", gap: 12 }}>
        <div>
          <label htmlFor="note-title" style={{ display: "block", fontSize: 13, fontWeight: 650 }}>
            Title
          </label>
          <input
            id="note-title"
            className="input"
            value={selectedNote.title}
            onChange={(e) => updateNote(selectedNoteId, { title: e.target.value })}
            placeholder="Untitled note"
            aria-label="Note title"
          />
        </div>

        <div>
          <label htmlFor="note-content" style={{ display: "block", fontSize: 13, fontWeight: 650 }}>
            Content
          </label>
          <textarea
            id="note-content"
            className="textarea"
            value={selectedNote.content}
            onChange={(e) => updateNote(selectedNoteId, { content: e.target.value })}
            placeholder="Write your note here…"
            aria-label="Note content"
          />
        </div>

        <p className="muted" style={{ margin: 0, fontSize: 12 }}>
          Changes are kept in memory for this scaffold. Persistence will be added later.
        </p>
      </div>
    </div>
  );
}
