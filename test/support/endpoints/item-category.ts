import { expect } from 'chai';

import { IItemCategory } from '../../../src/interfaces';
import { isNameArray, isNamedAPIResource, isNamedAPIResourceArray } from '../type-guards';

export function itemCategoryTests(itemCategory: IItemCategory): void {
  expect(itemCategory.items).to.satisfy(isNamedAPIResourceArray);
  expect(itemCategory.names).to.satisfy(isNameArray);
  expect(itemCategory.pocket).to.satisfy(isNamedAPIResource);
}
