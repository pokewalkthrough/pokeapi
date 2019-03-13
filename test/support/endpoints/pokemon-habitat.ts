import { expect } from 'chai';

import { isNameArray, isNamedAPIResourceArray } from '../type-guards';
import { IPokemonHabitat } from '../../../src/types';

export function pokemonHabitatTests(pokemonHabitat: IPokemonHabitat): void {
  expect(pokemonHabitat.names).to.satisfy(isNameArray);
  expect(pokemonHabitat.pokemon_species).to.satisfy(isNamedAPIResourceArray);
}
