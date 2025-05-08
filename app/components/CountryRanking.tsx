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
        "https://restcountries.com/v3.1/all?fields=name,flags,area,population,region,independent,unMember,subregion";
      const res = await fetch(url, { cache: "force-cache" });
      const data = await res.json();
      setData(data);
      console.log(data);
      return data;
    }
    getCountries();
  }, [filters.sortBy]);

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
          (item.name.common
            .toLowerCase()
            .includes(filters.searchTerm.toLowerCase()) ||
            item.region
              .toLowerCase()
              .includes(filters.searchTerm.toLowerCase()) ||
            item.subregion
              .toLowerCase()
              .includes(filters.searchTerm.toLowerCase())) &&
          (filters.region.length > 0
            ? filters.region.includes(item.region)
            : true) &&
          (filters.status.length && filters.status.includes("Independent")
            ? item.independent
            : filters.status.includes("Member of the United Nations")
            ? item.unMember
            : true)
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

  const Counter = () => {
    return (
      <div className="py-7">
        <span>Found {filteredData.length} countries</span>
      </div>
    );
  };

  return (
    <div>
      <Hero />
      <div className="rounded-lg bg-background -mt-40 mx-4 p-4 border border-primary flex flex-col md:flex-row md:gap-6">
        <div>
          <Counter></Counter>
          <Form
            changeFilters={(filters: FilterObject) => setFilters(filters)}
          />
        </div>
        <ResultsTable results={filteredData} />
      </div>
    </div>
  );
}
