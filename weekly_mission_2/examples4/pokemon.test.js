import Pokemon from "./pokemon";

test("1) Create a new object pokemon", () => {
  const name = "Pikachu";
  const myPokemon = new Pokemon(name);
  expect(myPokemon.name).toBe(name);
});
