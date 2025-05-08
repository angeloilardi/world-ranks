import Hero from "@/app/components/Hero";
import Image from "next/image";

export async function getCountry(name: string) {
  const res = await fetch(
    `https://restcountries.com/v3.1/name/${name}?fullText=true`
  );
  const data = await res.json();
  console.log(data);
  return data[0];
}

export async function getFlag(country: string) {
  const res = await fetch(
    `https://restcountries.com/v3.1/alpha/${country}?fields=flags,name`
  );
  const data = await res.json();
  return data;
}

export const DetailsBox = ({ data, value }) => {
  return (
    <div className="rounded-lg bg-primary p-3 flex items-center">
      <p>{data}</p>
      <span className="w-0.25 h-4 bg-secondary mx-2"></span>
      <p>{value}</p>
    </div>
  );
};

const DetailsRow = ({ data, value }) => {
  return (
    <div className="flex justify-between gap-2 w-full px-6 py-8 border-b border-b-secondary">
      <p>{data}</p>
      <p>{value} </p>
    </div>
  );
};

export default async function Country({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const country = await getCountry((await params).id);
  console.log(country[0]);
  return (
    <div>
      <Hero />
      <div className="flex flex-col items-center">
        <Image
          src={country.flags.png}
          alt={country.flags.alt}
          width={300}
          height={240}
          className="-mt-10 rounded-lg"
        />
        <div className="mt-6 text-center">
          <h1 className="text-4xl">{country.name.common}</h1>
          <h2 className="mt-2">{country.name.official}</h2>
        </div>
        <div className="flex justify-evenly gap-4 py-12 w-full">
          <DetailsBox
            data="Population"
            value={country.population.toLocaleString()}
          />
          <DetailsBox data="Area (km²)" value={country.area.toLocaleString()} />
        </div>
        <div className="flex w-full">
          <div className="flex flex-col w-full nth-1:border-t border-t-secondary">
            <DetailsRow data={"Capital"} value={country.capital[0]} />
            <DetailsRow data={"Subregion"} value={country.subregion} />
            <DetailsRow
              data={"Language"}
              value={Object.values(country.languages).join(", ")}
            />
            <DetailsRow
              data={"Currencies"}
              value={Object.values(country.currencies)
                .map((currency) => currency.name)
                .join(", ")}
            />
            <DetailsRow
              data={"Continents"}
              value={country.continents
                .map((continent) => continent)
                .join(", ")}
            />
          </div>
        </div>
      </div>
      <div className="p-6">
        <p>Neighbouring Countries</p>
        <div className="flex gap-4 py-4 flex-wrap">
          {country.borders &&
            (await Promise.all(
              country.borders.map(async (country, i) => {
                const flag = await getFlag(country);
                console.log(flag.png);
                return (
                  <div className="flex flex-col gap-4 flex-wrap" key={i}>
                    <a href={`/country/${flag.name.common}`}>
                      <Image
                        src={flag.flags.png}
                        alt={flag.flags.alt}
                        width={100}
                        height={60}
                        className="rounded-md w-24 h-16"
                      />
                      <p>{flag.name.common}</p>
                    </a>
                  </div>
                );
              })
            ))}
        </div>
      </div>
    </div>
  );
}
