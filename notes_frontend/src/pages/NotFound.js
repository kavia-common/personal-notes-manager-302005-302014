import React from "react";
import { Link } from "react-router-dom";

// PUBLIC_INTERFACE
export default function NotFound() {
  /** 404 page for unmatched routes. */
  return (
    <main className="Page">
      <div className="container">
        <div className="card" style={{ padding: 18 }}>
          <h1 style={{ marginTop: 0 }}>Page not found</h1>
          <p className="muted" style={{ lineHeight: 1.6 }}>
            The page you’re looking for doesn’t exist.
          </p>
          <Link to="/" className="btn btnPrimary" aria-label="Go back to home">
            Go to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
