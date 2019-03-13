import { expect } from 'chai';

import { isDescriptionArray, isNameArray, isNamedAPIResourceArray } from '../type-guards';
import { IItemAttribute } from '../../../src/types';

export function itemAttributeTests(itemAttribute: IItemAttribute): void {
  expect(itemAttribute.items).to.satisfy(isNamedAPIResourceArray);
  expect(itemAttribute.names).to.satisfy(isNameArray);
  expect(itemAttribute.descriptions).to.satisfy(isDescriptionArray);
}
