import { expect } from 'chai';

import { isNameArray, isNamedAPIResourceArray } from '../type-guards';
import { IEggGroup } from '../../../src/types';

export function eggGroupTests(eggGroup: IEggGroup): void {
  expect(eggGroup.names).to.satisfy(isNameArray);
  expect(eggGroup.pokemon_species).to.satisfy(isNamedAPIResourceArray);
}
