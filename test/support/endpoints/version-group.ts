import { expect } from 'chai';

import { isNamedAPIResource, isNamedAPIResourceArray } from '../type-guards';
import { IVersionGroup } from '../../../src/types';

export function versionGroupTests(versionGroup: IVersionGroup): void {
  expect(versionGroup.order).to.be.a('number');
  expect(versionGroup.generation).to.satisfy(isNamedAPIResource);
  expect(versionGroup.move_learn_methods).to.satisfy(isNamedAPIResourceArray);
  expect(versionGroup.pokedexes).to.satisfy(isNamedAPIResourceArray);
  expect(versionGroup.regions).to.satisfy(isNamedAPIResourceArray);
  expect(versionGroup.versions).to.satisfy(isNamedAPIResourceArray);
}
