import { expect } from 'chai';
import { IBerryFirmness } from '../../../src/interfaces';
import { isNameArray, isNamedAPIResourceArray } from '../type-guards';

export function berryFirmnessTests(berryFirmness: IBerryFirmness): void {
  expect(berryFirmness.berries).to.satisfy(isNamedAPIResourceArray);
  expect(berryFirmness.names).to.satisfy(isNameArray);
}
