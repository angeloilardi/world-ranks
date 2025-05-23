type Country = {
  name: {
    common: string;
  };
  flags: {
    png: string;
    alt: string;
  };
  region: string;
  population: number;
  area: number;
};

import Image from "next/image";
import Pagination from "./Pagination";
import { useState } from "react";

const EmptyState = () => {
  return (
    <div>
      <p className="italic pt-6">No results found</p>
    </div>
  );
};

export function ResultsTable({ results }: { results: Country[] }) {
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 10;

  const paginatedResults = results.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );
  console.log("paginatedResults", paginatedResults);

  return (
    <div className="flex-2/3 flex-col">
      <table className="">
        <thead className="border-b-secondary border-b">
          <tr className="py-2">
            <th className="py-5 pr-10 text-left text-xs min-w-[70px]">Flag</th>
            <th className="py-5 pr-10 text-left text-xs min-w-[70px]">Name</th>
            <th className="py-5 pr-10 text-left text-xs min-w-[70px]">
              Population
            </th>
            <th className="py-5 pr-10 text-left text-xs min-w-[70px] hidden sm:table-cell">
              Area (km²)
            </th>
            <th className="py-5 text-left text-xs min-w-[70px] hidden lg:table-cell">
              Region
            </th>
          </tr>
        </thead>
        <tbody>
          {paginatedResults.length > 0 &&
            paginatedResults.map((country, i) => {
              return (
                <tr key={i} className="py-6">
                  <td className="py-5 pr-10 min-w-5">
                    {
                      <Image
                        src={country.flags.png}
                        alt={country.flags.alt}
                        width={50}
                        height={40}
                        className="w-10 h-auto"
                      />
                    }
                  </td>
                  <td className="pr-10">
                    <a href={`/country/${country.name.common}`}>
                      {country.name.common}
                    </a>
                  </td>
                  <td className="pr-10">
                    <p>{country.population.toLocaleString()}</p>
                  </td>
                  <td className="pr-10 hidden sm:table-cell">
                    <p>{country.area.toLocaleString()}</p>
                  </td>
                  <td className="hidden lg:table-cell">
                    <p>{country.region}</p>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      {!results.length && <EmptyState></EmptyState>}
      <Pagination
        currentPage={currentPage}
        totalItems={results?.length}
        totalPages={Math.ceil(results?.length / 10)}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
}
