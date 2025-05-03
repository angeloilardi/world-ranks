import { ChangeEventHandler } from "react";

export const Select = ({
  options,
  name,
  onChange,
}: {
  options: string[];
  name: string;
  onChange: ChangeEventHandler<HTMLSelectElement>;
}) => {
  return (
    <div className=" flex flex-col gap-2 rounded-lg border border-secondary p-3 h-10">
      <select name={name} id={name} className="text-sm" onChange={onChange}>
        {options.map((option, i) => {
          return (
            <option key={i} value={option}>
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
};
