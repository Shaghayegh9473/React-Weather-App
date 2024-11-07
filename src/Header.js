import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Header() {
  return (
    <div className="mb-4">
      <a
        href="https://www.shecodes.io"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="./logo.png" alt="logo" className="logo" />
      </a>
    </div>
  );
}
