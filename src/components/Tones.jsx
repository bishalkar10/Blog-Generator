export default function Tones({ tonesArray, selectedTone, setSelectedTone }) {
  const colorClasses = [
    "bg-green-600",
    "bg-blue-600",
    "bg-red-600",
    "bg-yellow-600",
  ];

  const tonesList = tonesArray.map((tone, index) => {
    const isSelected = tone === selectedTone;
    const outlineClasses = isSelected
      ? "outline-offset-2 outline-3 outline outline-current"
      : "";
    return (
      <li
        className={`p-2 px-3 rounded grid place-content-center  ${outlineClasses} text-white ${
          colorClasses[index % colorClasses.length]
        }`}
        key={tone}
        onClick={() => setSelectedTone(tone)}
        value={tone}
      >
        {tone}
      </li>
    );
  });

  return <ul className="grid items-center justify-center grid-cols-[repeat(2,120px)] sm:flex gap-x-10 gap-y-5 px-2 pt-5">{tonesList}</ul>;
}
