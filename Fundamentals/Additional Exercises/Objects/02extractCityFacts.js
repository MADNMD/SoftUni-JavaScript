function extractCityFacts(info){
    console.log(`${info.name} has a popolatins of ${info.population} and is situated in ${info.continent}`);
}
extractCityFacts({
    name: "Paris",
    population: "2,140,526",
    continent: "Europe"});