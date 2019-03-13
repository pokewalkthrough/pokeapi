import { expect } from 'chai';

import { isNameArray, isNamedAPIResource, isNamedAPIResourceArray } from '../type-guards';
import { IItemCategory } from '../../../src/types';

export function itemCategoryTests(itemCategory: IItemCategory): void {
  expect(itemCategory.items).to.satisfy(isNamedAPIResourceArray);
  expect(itemCategory.names).to.satisfy(isNameArray);
  expect(itemCategory.pocket).to.satisfy(isNamedAPIResource);
}
