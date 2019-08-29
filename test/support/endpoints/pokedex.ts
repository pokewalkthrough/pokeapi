import { expect } from 'chai';

import { IPokedex } from '../../../src/interfaces';
import { descriptionTest, nameTest, namedAPIResourceTest, pokemonEntryTest } from '../objects';
import { booleanTest } from '../primitives';

export function pokedexTest(pokedex: IPokedex): void {
  expect(pokedex)
    .to.be.an('object')
    .and.to.have.keys(['descriptions', 'id', 'is_main_series', 'name', 'names', 'pokemon_entries', 'region', 'version_groups']);

  booleanTest(pokedex.is_main_series);
  descriptionTest(...pokedex.descriptions);
  nameTest(...pokedex.names);
  namedAPIResourceTest(true, pokedex.region);
  namedAPIResourceTest(false, ...pokedex.version_groups);
  pokemonEntryTest(...pokedex.pokemon_entries);
}
