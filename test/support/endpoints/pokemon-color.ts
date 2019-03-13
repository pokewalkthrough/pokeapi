import { expect } from 'chai';

import { isNameArray, isNamedAPIResourceArray } from '../type-guards';
import { IPokemonColor } from '../../../src/types';

export function pokemonColorTests(pokemonColor: IPokemonColor): void {
  expect(pokemonColor.names).to.satisfy(isNameArray);
  expect(pokemonColor.pokemon_species).to.satisfy(isNamedAPIResourceArray);
}
