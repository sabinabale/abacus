import React from "react";

export default function Footer() {
  return (
    <footer className="w-[500px] flex flex-col lg:flex-row lg:justify-between items-center text-zinc-500">
      <small>{new Date().getFullYear()} © All rights reserved.</small>
      <small>
        Project by{" "}
        <a
          className="text-green-700 font-semibold hover:text-green-600"
          href="https://sabini.io"
        >
          Sabina Balejikova.
        </a>
      </small>
    </footer>
  );
}
