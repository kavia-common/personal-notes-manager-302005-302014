import React, { useMemo } from "react";
import { useNotes } from "../context/NotesContext";
import EmptyState from "./EmptyState";

function formatUpdatedAt(ts) {
  try {
    return new Date(ts).toLocaleString(undefined, {
      month: "short",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch {
    return "";
  }
}

// PUBLIC_INTERFACE
export default function NotesList() {
  /** Left panel showing notes and selection; no persistence yet. */
  const { notes, selectedNoteId, selectNote, createNote, deleteNote } = useNotes();

  const sorted = useMemo(() => {
    return [...notes].sort((a, b) => (b.updatedAt ?? 0) - (a.updatedAt ?? 0));
  }, [notes]);

  if (!sorted.length) {
    return (
      <EmptyState
        title="No notes yet"
        description="Create your first note to get started. Notes are stored in memory for now."
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
        <h2 className="PanelTitle">Notes</h2>
        <button className="btn btnPrimary" onClick={createNote} type="button" aria-label="Create new note">
          New
        </button>
      </div>

      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 10 }}>
        {sorted.map((note) => {
          const active = note.id === selectedNoteId;
          return (
            <li key={note.id}>
              <div
                className="card"
                style={{
                  padding: 12,
                  borderColor: active ? "rgba(37, 99, 235, 0.28)" : "var(--color-border)",
                  background: active ? "rgba(37, 99, 235, 0.06)" : "var(--color-surface)",
                  cursor: "pointer",
                  transition: "background-color 120ms ease, border-color 120ms ease, transform 120ms ease",
                }}
              >
                <button
                  type="button"
                  onClick={() => selectNote(note.id)}
                  className="btn"
                  style={{
                    width: "100%",
                    textAlign: "left",
                    padding: 0,
                    border: "none",
                    background: "transparent",
                    boxShadow: "none",
                  }}
                  aria-current={active ? "true" : "false"}
                  aria-label={`Select note: ${note.title || "Untitled note"}`}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
                    <div style={{ fontWeight: 750, letterSpacing: "-0.01em" }}>
                      {note.title || "Untitled note"}
                    </div>
                    <div className="muted" style={{ fontSize: 12, whiteSpace: "nowrap" }}>
                      {formatUpdatedAt(note.updatedAt)}
                    </div>
                  </div>
                  <div className="muted" style={{ marginTop: 6, fontSize: 13 }}>
                    {(note.content || "").trim().slice(0, 72) || "No content yet…"}
                    {(note.content || "").trim().length > 72 ? "…" : ""}
                  </div>
                </button>

                <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 10 }}>
                  <button
                    type="button"
                    className="btn"
                    onClick={() => deleteNote(note.id)}
                    aria-label={`Delete note: ${note.title || "Untitled note"}`}
                    style={{
                      borderColor: "rgba(239, 68, 68, 0.25)",
                      background: "rgba(239, 68, 68, 0.08)",
                      color: "#991b1b",
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </li>
          );
        })}
      </ul>

      <p className="muted" style={{ marginTop: 14, fontSize: 12 }}>
        In-memory only (no storage yet).
      </p>
    </div>
  );
}
