import React from "react";

// PUBLIC_INTERFACE
export default function About() {
  /** About page for the scaffolded notes app. */
  return (
    <main className="Page">
      <div className="container">
        <div className="card" style={{ padding: 18 }}>
          <h1 style={{ marginTop: 0 }}>About</h1>
          <p className="muted" style={{ lineHeight: 1.6 }}>
            Personal Notes is a lightweight, React-based notes UI scaffold following the Ocean
            Professional theme. It currently uses an in-memory store (no backend, no persistence).
          </p>
          <ul style={{ marginBottom: 0, lineHeight: 1.8 }}>
            <li>Two-panel responsive layout (list + editor)</li>
            <li>Routing: Home, About, and a 404 page</li>
            <li>Accessible form labels and focus styles</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
