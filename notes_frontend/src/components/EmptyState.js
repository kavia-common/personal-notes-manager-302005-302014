import React from "react";

// PUBLIC_INTERFACE
export default function EmptyState({ title, description, action }) {
  /** Simple, reusable empty state callout. */
  return (
    <div
      className="card"
      style={{
        padding: "18px",
        borderStyle: "dashed",
        background:
          "linear-gradient(135deg, rgba(37, 99, 235, 0.08), rgba(245, 158, 11, 0.06))",
      }}
      role="status"
      aria-live="polite"
    >
      <h2 style={{ margin: 0, fontSize: 16, letterSpacing: "-0.01em" }}>{title}</h2>
      {description ? (
        <p className="muted" style={{ marginTop: 8, marginBottom: 0, lineHeight: 1.5 }}>
          {description}
        </p>
      ) : null}
      {action ? <div style={{ marginTop: 14 }}>{action}</div> : null}
    </div>
  );
}
