"use client";
export default function ResetButton() {
  function reloadPage() {
    location.reload();
  }

  return (
    <button
      onClick={reloadPage}
      className="w-[300px] h-[60px] text-zinc-100 border rounded-lg bg-zinc-700"
    >
      Reset
    </button>
  );
}
