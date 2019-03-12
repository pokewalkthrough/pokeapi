import { expect } from 'chai';

import { IPokemonShape } from '../../../src/interfaces';
import { isAwesomeNameArray, isNameArray, isNamedAPIResourceArray } from '../type-guards';

export function pokemonShapeTests(pokemonShape: IPokemonShape): void {
  expect(pokemonShape.awesome_names).to.satisfy(isAwesomeNameArray);
  expect(pokemonShape.names).to.satisfy(isNameArray);
  expect(pokemonShape.pokemon_species).to.satisfy(isNamedAPIResourceArray);
}
