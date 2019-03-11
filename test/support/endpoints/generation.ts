import { expect } from 'chai';

import { IGeneration } from '../../../src/interfaces';
import { isNameArray, isNamedAPIResource, isNamedAPIResourceArray } from '../type-guards';

export function generationTests(generation: IGeneration): void {
  expect(generation.abilities).to.satisfy(isNamedAPIResourceArray);
  expect(generation.names).to.satisfy(isNameArray);
  expect(generation.main_region).to.satisfy(isNamedAPIResource);
  expect(generation.moves).to.satisfy(isNamedAPIResourceArray);
  expect(generation.pokemon_species).to.satisfy(isNamedAPIResourceArray);
  expect(generation.types).to.satisfy(isNamedAPIResourceArray);
  expect(generation.version_groups).to.satisfy(isNamedAPIResourceArray);
}
