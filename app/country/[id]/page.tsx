import Hero from "@/app/components/Hero";
import Image from "next/image";

interface Country {
  name: {
    common: string;
    official: string;
  };
  flags: {
    alt: string;
    png: string;
  };
  area: number;
  languages: string[];
  currencies: {
    currency: {
      name: string;
    };
  };
  subregion: string;
  continents: string[];
  borders: string[];
  capital: string;
  population: number;
}

async function getCountry(name: string): Promise<Country> {
  const res = await fetch(
    `https://restcountries.com/v3.1/name/${name}?fullText=true`
  );
  const data = await res.json();
  return data[0];
}

async function getFlag(country: string) {
  const res = await fetch(
    `https://restcountries.com/v3.1/alpha/${country}?fields=flags,name`
  );
  const data = await res.json();
  return data;
}

const DetailsBox = ({ data, value }: { data: string; value: string }) => {
  return (
    <div className="rounded-lg bg-primary p-3 flex items-center min-w-24 max-w-76 flex-wrap">
      <p>{data}</p>
      <span className="w-0.25 h-4 bg-secondary mx-2"></span>
      <p>{value}</p>
    </div>
  );
};

const DetailsRow = ({ data, value }: { data: string; value: string }) => {
  return (
    <div className="flex justify-between gap-2 w-full px-6 py-8 border-b border-b-secondary">
      <p>{data}</p>
      <p className="text-right">{value} </p>
    </div>
  );
};

export default async function Country({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const country = await getCountry((await params).id);
  return (
    <div>
      <Hero />
      <div className="flex flex-col items-center max-w-3xl -mt-16 mb-16 border border-secondary rounded-lg bg-background mx-auto">
        <Image
          src={country.flags.png || ""}
          alt={country.flags.alt || ""}
          width={320}
          height={213}
          className="-mt-10 rounded-lg aspect-auto"
        />
        <div className="mt-6 text-center">
          <h1 className="text-4xl">{country.name.common}</h1>
          <h2 className="mt-2">{country.name.official}</h2>
        </div>
        <div className="flex flex-col sm:flex-row items-center sm:justify-evenly gap-4 py-12 w-full">
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
        <div className="p-6 self-start">
          <p>Neighbouring Countries</p>
          <div className="flex gap-4 py-4 flex-wrap">
            {country.borders &&
              (await Promise.all(
                country.borders.map(async (country, i) => {
                  const flag = await getFlag(country);
                  return (
                    <div
                      className="flex flex-col gap-4 flex-wrap max-w-24"
                      key={i}
                    >
                      <a href={`/country/${flag.name.common}`}>
                        <Image
                          src={flag.flags.png}
                          alt={flag.flags.alt}
                          width={100}
                          height={60}
                          className="rounded-md w-24 h-16 "
                        />
                        <p className="mt-2">{flag.name.common}</p>
                      </a>
                    </div>
                  );
                })
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
