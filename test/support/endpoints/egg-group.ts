import { expect } from 'chai';

import { IEggGroup } from '../../../src/interfaces';
import { isNameArray, isNamedAPIResourceArray } from '../type-guards';

export function eggGroupTests(eggGroup: IEggGroup): void {
  expect(eggGroup.names).to.satisfy(isNameArray);
  expect(eggGroup.pokemon_species).to.satisfy(isNamedAPIResourceArray);
}
