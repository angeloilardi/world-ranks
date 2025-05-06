"use client";
import Hero from "./Hero";
import { ResultsTable } from "./ResultsTable";
import Form from "./Form/Form";
// import getCountries from "./hooks/getCountries";
import { useCallback, useEffect, useState } from "react";

interface FilterObject {
  searchTerm: string;
  region: string[];
  status: string[];
  sortBy: "Population" | "Name" | "Area";
}

export default function CountryRanking() {
  const [data, setData] = useState<any[]>([]);
  const [filteredData, setFilteredData] = useState<any>(data);
  const [filters, setFilters] = useState<FilterObject>({
    searchTerm: "",
    region: [],
    status: [],
    sortBy: "Population",
  });

  useEffect(() => {
    async function getCountries() {
      const url =
        "https://restcountries.com/v3.1/all?fields=name,flags,area,population,region,independent,unMember";
      const res = await fetch(url, { cache: "force-cache" });
      const data = await res.json();
      setData(data);
      console.log(data);
      return data;
    }
    getCountries();
  }, [filters.sortBy]);
  // const countries = await getCountries();

  const sortData = useCallback(
    (sortBy: string) => {
      switch (sortBy) {
        case "Population":
          return data.sort((a, b) => b.population - a.population);
        case "Area":
          return data.sort((a, b) => b.area - a.area);
        case "Name":
          return data.sort((a, b) =>
            a.name.common.localeCompare(b.name.common)
          );
        default:
          break;
      }
    },
    [data]
  );

  const filterData = useCallback(
    (filters: FilterObject) => {
      return data.filter(
        (item) =>
          item.name.common
            .toLowerCase()
            .includes(filters.searchTerm.toLowerCase()) &&
          (filters.region.length > 0
            ? filters.region.includes(item.region)
            : true)
        // &&
        // (filters.status.length > 0
        //   ? filters.status.includes(item.region)
        //   : true)
      );
    },
    [data]
  );

  useEffect(() => {
    setFilteredData(sortData(filters.sortBy));
  }, [filters.sortBy, sortData]);

  useEffect(() => {
    setFilteredData(filterData(filters));
  }, [filters.region, filters.status, filters.searchTerm, filterData, filters]);

  return (
    <div className="p-8">
      <Hero />
      <Form changeFilters={(filters: FilterObject) => setFilters(filters)} />
      {/* <form onSubmit={handleSubmit}>
        <div className="bg-background rounded-lg -mt-40 z-30 mx-4 mb-6 shadow p-4 gap-6 flex flex-col">
          <SearchBar />
          <FormGroup label="Sort by">
            <Select
              name="sort-by"
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
      </form> */}
      <ResultsTable results={filteredData} />
    </div>
  );
}
