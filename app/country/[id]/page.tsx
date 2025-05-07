export async function getCountry(name: string) {
  const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
  const data = await res.json();
  return data;
}

export default async function Country({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const country = await getCountry;
  return <div></div>;
}
