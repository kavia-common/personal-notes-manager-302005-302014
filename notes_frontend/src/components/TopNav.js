import React from "react";
import { NavLink } from "react-router-dom";

// PUBLIC_INTERFACE
export default function TopNav() {
  /** Global app top bar with navigation and placeholder actions. */
  return (
    <header className="TopBar">
      <div className="TopBarInner">
        <div className="Brand" aria-label="Personal Notes">
          <div className="Logomark" aria-hidden="true" />
          <div>
            <div className="h1">Personal Notes</div>
            <div className="muted" style={{ fontSize: 12 }}>
              Ocean Professional scaffold
            </div>
          </div>
        </div>

        <nav className="NavLinks" aria-label="Primary">
          <NavLink
            to="/"
            end
            className={({ isActive }) => `NavLink ${isActive ? "NavLinkActive" : ""}`}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => `NavLink ${isActive ? "NavLinkActive" : ""}`}
          >
            About
          </NavLink>
        </nav>

        <div className="TopActions">
          <button type="button" className="btn" aria-label="Placeholder action">
            Action
          </button>
        </div>
      </div>
    </header>
  );
}
