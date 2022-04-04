import React from "react";

function Loading() {
  return (
    <div className="d-flex align-items-center mb-5">
      <strong>Loading....</strong>
      <div className="spinner-border text-danger ms-auto"></div>
    </div>
  );
}

export default Loading;
