import React from "react";

export default function ProgressBar({ progress }) {
  return (
    <div className="fixed left-0 top-0 h-1 w-full z-50 bg-transparent">
      <div
        className="h-1 bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-400 transition-all"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
