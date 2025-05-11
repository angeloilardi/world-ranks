import { ReactNode } from "react";
import camelCase from "lodash/camelCase";

export default function FormGroup({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col w-full">
      <label htmlFor={camelCase(label)} className="text-xs mb-2">
        {label}
      </label>
      {children}
    </div>
  );
}
