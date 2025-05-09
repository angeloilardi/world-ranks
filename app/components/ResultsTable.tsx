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

export function ResultsTable({ results }: { results: Country[] }) {
  return (
    <div>
      <table className="">
        <thead className="border-b-secondary border-b">
          <tr className="py-2">
            <th className="py-5 text-left text-xs min-w-[70px]">Flag</th>
            <th className="py-5 text-left text-xs">Name</th>
            <th className="py-5 text-left text-xs">Population</th>
            <th className="py-5 text-left text-xs">Area (km²)</th>
            <th className="py-5 text-left text-xs hidden lg:block">Region</th>
          </tr>
        </thead>
        <tbody>
          {results.map((country, i) => {
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
                <td className="pr-10">
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
    </div>
  );
}
