import React, { ReactNode } from "react"; // info, warning

type InfoBoxProps = {
  mode: "hint" | "Warning";
  children: ReactNode;
};

function InfoBox({ mode, children }: InfoBoxProps) {
  if (mode === "Warning") {
    return (
      <aside className="infobox infobox-warning warning--medium">
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
