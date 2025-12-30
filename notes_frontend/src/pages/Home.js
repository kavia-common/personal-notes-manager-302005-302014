import React from "react";
import NotesList from "../components/NotesList";
import NoteEditor from "../components/NoteEditor";

// PUBLIC_INTERFACE
export default function Home() {
  /** Main page: two-panel notes list + editor layout. */
  return (
    <main className="Page">
      <div className="container">
        <div className="Shell" aria-label="Notes workspace">
          <section className="card Panel" aria-label="Notes list panel">
            <NotesList />
          </section>
          <section className="card Panel" aria-label="Note editor panel">
            <NoteEditor />
          </section>
        </div>
      </div>
    </main>
  );
}
