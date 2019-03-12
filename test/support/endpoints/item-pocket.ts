import { expect } from 'chai';

import { IItemPocket } from '../../../src/interfaces';
import { isNameArray, isNamedAPIResourceArray } from '../type-guards';

export function itemPocketTests(itemPocket: IItemPocket): void {
  expect(itemPocket.categories).to.satisfy(isNamedAPIResourceArray);
  expect(itemPocket.names).to.satisfy(isNameArray);
}
