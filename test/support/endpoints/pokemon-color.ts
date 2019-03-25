import { expect } from 'chai';

import { IPokemonColor } from '../../../src/interfaces';
import { isNameArray, isNamedAPIResourceArray } from '../type-guards';

export function pokemonColorTests(pokemonColor: IPokemonColor): void {
  expect(pokemonColor.names).to.satisfy(isNameArray);
  expect(pokemonColor.pokemon_species).to.satisfy(isNamedAPIResourceArray);
}
