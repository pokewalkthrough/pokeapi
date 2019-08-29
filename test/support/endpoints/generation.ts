import { expect } from 'chai';

import { IGeneration } from '../../../src/interfaces';
import { nameTest, namedAPIResourceTest } from '../objects';
import { numberTest, stringTest } from '../primitives';

export function generationTest(generation: IGeneration): void {
  expect(generation)
    .to.be.an('object')
    .and.to.have.keys(['abilities', 'id', 'main_region', 'moves', 'name', 'names', 'pokemon_species', 'types', 'version_groups']);

  nameTest(...generation.names);
  namedAPIResourceTest(
    false,
    ...generation.abilities,
    generation.main_region,
    ...generation.moves,
    ...generation.pokemon_species,
    ...generation.types,
    ...generation.version_groups,
  );
  numberTest(false, generation.id);
  stringTest(false, generation.name);
}
