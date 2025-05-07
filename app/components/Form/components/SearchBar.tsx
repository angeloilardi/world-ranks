import Image from "next/image";
import { ChangeEventHandler } from "react";

export const SearchBar = ({
  onChange,
}: {
  onChange: ChangeEventHandler<HTMLInputElement>;
}) => {
  return (
    <div className="flex w-full bg-primary rounded-lg h-11 p-3 gap-2 text-foreground md:self-end">
      <Image src="/images/Search.svg" alt="" width={20} height={20} />
      <input
        className="w-full placeholder:text-foreground"
        placeholder="Search by Name, Region, Subregion"
        name="searchTerm"
        onChange={onChange}
      />
    </div>
  );
};
