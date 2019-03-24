import { expect } from 'chai';

import { IPokedex } from '../../../src/interfaces';
import { isDescriptionArray, isNameArray, isNamedAPIResourceArray, isNamedAPIResourceOrNull, isPokemonEntryArray } from '../type-guards';

export function pokedexTests(pokedex: IPokedex): void {
  expect(pokedex.is_main_series).to.be.a('boolean');
  expect(pokedex.descriptions).to.satisfy(isDescriptionArray);
  expect(pokedex.names).to.satisfy(isNameArray);
  expect(pokedex.pokemon_entries).to.satisfy(isPokemonEntryArray);
  expect(pokedex.region).to.satisfy(isNamedAPIResourceOrNull);
  expect(pokedex.version_groups).to.satisfy(isNamedAPIResourceArray);
}
