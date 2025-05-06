// export default async function useCountries() {
//   const url =
//     "https://restcountries.com/v3.1/all?fields=name,flags,area,population";
//   const res = await fetch(url, { cache: "force-cache" });
//   const data = await res.json();
//   console.log(data);
//   return data.sort((a, b) => b.population - a.population);
// }
