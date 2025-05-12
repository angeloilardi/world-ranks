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
      <span className="text-xs mb-2">{label}</span>
      {children}
    </div>
  );
}
