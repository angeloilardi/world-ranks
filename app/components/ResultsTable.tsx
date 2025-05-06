// type Country = {
//   name: string;
//   flags: string;
//   population: number;
//   area: number;
// };
import Image from "next/image";

export function ResultsTable({ results }) {
  return (
    <div>
      <table className="w-full">
        <thead className="border-b-secondary border-b">
          <tr className="py-2">
            <th className="py-5 text-left text-xs">Flag</th>
            <th className="py-5 text-left text-xs">Name</th>
            <th className="py-5 text-left text-xs">Population</th>
            <th className="py-5 text-left text-xs">Area (km²)</th>
          </tr>
        </thead>
        <tbody>
          {results.map((country, i) => {
            return (
              <tr key={i} className="py-6">
                <td className="py-5 pr-10">
                  {
                    <Image
                      src={country.flags.png}
                      alt=""
                      width={50}
                      height={40}
                      className="w-10 h-auto"
                    />
                  }
                </td>
                <td className="pr-10">
                  <p>{country.name.common}</p>
                </td>
                <td className="pr-10">
                  <p>{country.population.toLocaleString()}</p>
                </td>
                <td>
                  <p>{country.area.toLocaleString()}</p>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
