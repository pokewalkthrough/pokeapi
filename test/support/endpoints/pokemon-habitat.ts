import { expect } from 'chai';

import { IPokemonHabitat } from '../../../src/interfaces';
import { isNameArray, isNamedAPIResourceArray } from '../type-guards';

export function pokemonHabitatTests(pokemonHabitat: IPokemonHabitat): void {
  expect(pokemonHabitat.names).to.satisfy(isNameArray);
  expect(pokemonHabitat.pokemon_species).to.satisfy(isNamedAPIResourceArray);
}
