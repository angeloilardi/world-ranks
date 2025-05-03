import { Checkbox } from "./Form/components/Checkbox";
import { CheckboxButton } from "./Form/components/CheckboxButton";
import FormGroup from "./Form/components/FormGroup";
import { Select } from "./Form/components/Select";
import Hero from "./Hero";

const regions = [
  "Americas",
  "Antarctic",
  "Africa",
  "Asia",
  "Europe",
  "Oceania",
];

const sortOptions = ["Population", "Name", "Area"];

const statuses = ["Member of the United Nations", "Independent"];

export const SearchBar = () => {
  return (
    <div className="flex w-full bg-primary rounded-lg h-11 p-3 gap-2 text-foreground">
      <img src="/images/Search.svg" alt="" />
      <input
        className="w-full placeholder:text-foreground"
        placeholder="Search by Name, Region, Subregion"
      />
    </div>
  );
};

export default function CountryRanking() {
  return (
    <div>
      <Hero />
      <div className="bg-background rounded-lg  h-screen -mt-40 z-30 mx-4 mb-6 shadow p-4 gap-6 flex flex-col">
        <SearchBar />
        <FormGroup label="Sort by">
          <Select name="sort-by" options={sortOptions}></Select>
        </FormGroup>
        <FormGroup label="Region">
          <div className="flex flex-wrap gap-2">
            {regions.map((region, i) => {
              return <CheckboxButton key={i} option={region} name="region" />;
            })}
          </div>
        </FormGroup>
        <FormGroup label="Status">
          {statuses.map((status, i) => {
            return <Checkbox key={i} option={status} name="status"></Checkbox>;
          })}
        </FormGroup>
      </div>
    </div>
  );
}
