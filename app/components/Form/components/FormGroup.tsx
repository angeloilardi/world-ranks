import { ReactNode } from "react";

export default function FormGroup({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col w-full">
      <label htmlFor={label} className="text-sm mb-2">
        {label}
      </label>
      {children}
    </div>
  );
}
