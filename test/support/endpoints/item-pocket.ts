import { expect } from 'chai';

import { isNameArray, isNamedAPIResourceArray } from '../type-guards';
import { IItemPocket } from '../../../src/types';

export function itemPocketTests(itemPocket: IItemPocket): void {
  expect(itemPocket.categories).to.satisfy(isNamedAPIResourceArray);
  expect(itemPocket.names).to.satisfy(isNameArray);
}
