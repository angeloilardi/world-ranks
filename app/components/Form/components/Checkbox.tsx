export function Checkbox({ option, name }: { option: string; name: string }) {
  return (
    <div className="h-9 text-foreground flex items-center">
      <input
        type="checkbox"
        id={option}
        value={option}
        name={name}
        className="w-5 h-5 border border-foreground bg-background mr-3 accent-accent rounded-md appearance-none checked:appearance-auto"
      />
      <label htmlFor={option}>{option}</label>
    </div>
  );
}
