import ButtonGroup from "./Buttons";

export default function Frame({ setTotalValue }) {
  const buttonGroups = [
    { value: 1, color: "bg-gradient-to-r from-red-600 to-red-900" },
    { value: 10, color: "bg-gradient-to-r from-blue-500 to-blue-800" },
    { value: 100, color: "bg-gradient-to-r from-green-600 to-green-900" },
    { value: 1000, color: "bg-gradient-to-r from-gray-500 to-gray-800" },
    { value: 10000, color: "bg-gradient-to-r from-amber-600 to-amber-900" },
  ];

  return (
    <main className="w-[500px] h-[500px] border-4 border-zinc-900 flex flex-col justify-evenly">
      {buttonGroups.map((group, index) => (
        <div key={index} className="relative w-full border-b border-zinc-900">
          <ButtonGroup
            value={group.value}
            color={group.color}
            setTotalValue={setTotalValue}
          />
        </div>
      ))}
    </main>
  );
}
