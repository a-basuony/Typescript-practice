import React, { ReactNode } from "react"; // info, warning

type InfoBoxProps = {
  mode: "hint" | "Warning";
  severity?: "low" | "medium" | "high";
  children: ReactNode;
};

function InfoBox({ mode, children, severity }: InfoBoxProps) {
  if (mode === "Warning") {
    return (
      <aside className={`infobox infobox-warning warning--${severity}`}>
        <h2>Warning</h2>
        <p>{children}</p>
      </aside>
    );
  }

  return (
    <aside className="infobox infobox-hint">
      <p>{children}</p>
    </aside>
  );
}

export default InfoBox;
