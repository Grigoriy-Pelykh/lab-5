import React, { useState } from "react";

const styles = {
  border: "1px solid #777",
  color: "#777",
  padding: "10px 20px",
};

export default function ErrorBoundary({ errInfo }) {
  const [toggleDetailes, setToggleDetiles] = useState(false);

  return (
    <div className="errorDetiles" style={{ styles }}>
      <div
        className="detilesLink"
        onClick={() => setToggleDetiles(!toggleDetailes)}
      >
        {!toggleDetailes ? "Open" : "Hide"} detiles:
      </div>
      {toggleDetailes ? <div className="errordetails">{errInfo}</div> : null}
    </div>
  );
}
