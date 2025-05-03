import { ChangeEventHandler } from "react";

export function CheckboxButton({
  option,
  name,
  onChange,
}: {
  option: string;
  name: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
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
        onChange={onChange}
      />
    </div>
  );
}
