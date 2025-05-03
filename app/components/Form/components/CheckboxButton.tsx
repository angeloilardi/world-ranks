export function CheckboxButton({
  option,
  name,
}: {
  option: string;
  name: string;
}) {
  return (
    <div className="h-9 rounded-lg p-2.5 text-foreground has-checked:bg-primary flex items-center">
      <label htmlFor={option}>{option}</label>
      <input
        type="checkbox"
        id={option}
        name={name}
        value={option}
        className=""
        hidden
      />
    </div>
  );
}
