import Image from "next/image";

import Pagination from "./Pagination";

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

const EmptyState = () => {
  return (
    <div>
      <p className="italic pt-6">No results found</p>
    </div>
  );
};

export function ResultsTable({
  results,
  currentPage,
  onPageChange,
  isLoading,
}: {
  results: Country[];
  currentPage: number;
  onPageChange: (page: number) => void;
  isLoading?: boolean;
}) {
  const ITEMS_PER_PAGE = 10;

  const paginatedResults = results.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

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
          {isLoading && (
            <tr>
              <td colSpan={5} className="text-center py-6">
                Loading...
              </td>
            </tr>
          )}
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
      {!paginatedResults.length && !isLoading ? (
        <EmptyState></EmptyState>
      ) : (
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(results.length / ITEMS_PER_PAGE)}
          totalItems={results?.length}
          onPageChange={onPageChange}
        />
      )}
    </div>
  );
}
