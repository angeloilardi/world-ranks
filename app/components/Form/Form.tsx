"use client";
import { useFormik } from "formik";
import { Checkbox } from "./components/Checkbox";
import { CheckboxButton } from "./components/CheckboxButton";
import FormGroup from "./components/FormGroup";
import { Select } from "./components/Select";
import { SearchBar } from "./components/SearchBar";
import { useEffect } from "react";

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
      region: [],
      status: [],
    },
    onSubmit(values) {
      console.log(values);
    },
  });

  useEffect(() => {
    changeFilters(values);
  }, [changeFilters, values]);

  return (
    <form onSubmit={handleSubmit}>
      <div className="bg-background rounded-lg  z-30 mb-6 shadow gap-6 flex flex-col">
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
              ></Checkbox>
            );
          })}
        </FormGroup>
      </div>
    </form>
  );
}
