import { expect } from 'chai';

import { IRegion } from '../../../src/interfaces';
import { isNameArray, isNamedAPIResource, isNamedAPIResourceArray } from '../type-guards';

export function regionTests(region: IRegion): void {
  expect(region.locations).to.satisfy(isNamedAPIResourceArray);
  expect(region.names).to.satisfy(isNameArray);
  expect(region.main_generation).to.satisfy(isNamedAPIResource);
  expect(region.pokedexes).to.satisfy(isNamedAPIResourceArray);
  expect(region.version_groups).to.satisfy(isNamedAPIResourceArray);
}
