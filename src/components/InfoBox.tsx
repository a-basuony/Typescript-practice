import React, { ReactNode } from "react"; // info, warning

type HintInfoBox = {
  mode: "hint";
  children: ReactNode;
};
type WarningInfoBox = {
  mode: "warning";
  severity: "low" | "medium" | "high";
  children: ReactNode;
};

type InfoBoxProps = HintInfoBox | WarningInfoBox;

// type InfoBoxProps = {
//   mode: "hint" | "warning";
//   severity?: "low" | "medium" | "high";
//   children: ReactNode;
// };

// severity gives me an Error so don't structure it in  that way.
// function InfoBox({ mode, children, severity }: InfoBoxProps)

function InfoBox(props: InfoBoxProps) {
  const { mode, children } = props;
  if (mode === "hint") {
    return (
      <aside className="infobox infobox-hint">
        <p>{children}</p>
      </aside>
    );
  }

  const { severity } = props;
  return (
    <aside className={`infobox infobox-warning warning--${severity}`}>
      <h2>Warning</h2>
      <p>{children}</p>
    </aside>
  );
}

export default InfoBox;
