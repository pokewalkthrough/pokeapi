import { expect } from 'chai';

import { IBerryFlavor } from '../../../src/interfaces';
import { isFlavorBerryMapArray, isNameArray, isNamedAPIResource } from '../type-guards';

export function berryFlavorTests(berryFlavor: IBerryFlavor): void {
  expect(berryFlavor.berries).to.satisfy(isFlavorBerryMapArray);
  expect(berryFlavor.contest_type).to.satisfy(isNamedAPIResource);
  expect(berryFlavor.names).to.satisfy(isNameArray);
}
