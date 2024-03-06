"use client";
import React from "react";
import { useEffect } from "react";
import { Terminal } from "@xterm/xterm";
import "@xterm/xterm/css/xterm.css";

export function TerminalComponent() {
  useEffect(() => {
    const term = new Terminal();

    term.open(document.getElementById("terminal")!);
    term.write("Hello guest $ ");

    return () => {
      term.dispose();
    };
  }, []);

  return <div id="terminal" className="w-full h-full" />;
}

export default TerminalComponent;
