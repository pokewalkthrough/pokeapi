import { expect } from 'chai';

import { isAwesomeNameArray, isNameArray, isNamedAPIResourceArray } from '../type-guards';
import { IPokemonShape } from '../../../src/types';

export function pokemonShapeTests(pokemonShape: IPokemonShape): void {
  expect(pokemonShape.awesome_names).to.satisfy(isAwesomeNameArray);
  expect(pokemonShape.names).to.satisfy(isNameArray);
  expect(pokemonShape.pokemon_species).to.satisfy(isNamedAPIResourceArray);
}
