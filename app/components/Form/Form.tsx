"use client";
import { useFormik } from "formik";
import { Checkbox } from "./components/Checkbox";
import { CheckboxButton } from "./components/CheckboxButton";
import FormGroup from "./components/FormGroup";
import { Select } from "./components/Select";
import Image from "next/image";
import { ChangeEventHandler, useEffect } from "react";

export const SearchBar = ({
  onChange,
}: {
  onChange: ChangeEventHandler<HTMLInputElement>;
}) => {
  return (
    <div className="flex w-full bg-primary rounded-lg h-11 p-3 gap-2 text-foreground">
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

export default function Form({ changeFilters }) {
  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      searchTerm: "",
      sortBy: "Population",
      //   region: ["Americas", "Antarctic", "Africa", "Asia", "Europe", "Oceania"],
      region: [],
      status: [],
    },
    onSubmit(values) {
      console.log(values);
    },
  });

  useEffect(() => {
    console.log(values);
    changeFilters(values);
  }, [changeFilters, values]);

  return (
    <form onSubmit={handleSubmit}>
      <div className="bg-background rounded-lg -mt-40 z-30 mb-6 shadow gap-6 flex flex-col">
        <SearchBar onChange={handleChange} />
        <FormGroup label="Sort by">
          <Select
            name="sortBy"
            options={sortOptions}
            onChange={handleChange}
          ></Select>
        </FormGroup>
        <FormGroup label="Region">
          <div className="flex flex-wrap gap-2">
            {regions.map((region, i) => {
              return (
                <CheckboxButton
                  key={i}
                  option={region}
                  name="region"
                  onChange={handleChange}
                  checked={true}
                />
              );
            })}
          </div>
        </FormGroup>
        <FormGroup label="Status">
          {statuses.map((status, i) => {
            return (
              <Checkbox
                key={i}
                option={status}
                onChange={handleChange}
                name="status"
                value={values.status}
              ></Checkbox>
            );
          })}
        </FormGroup>
      </div>
    </form>
  );
}
