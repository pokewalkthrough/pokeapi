import { expect } from 'chai';

import { IItemAttribute } from '../../../src/interfaces';
import { isDescriptionArray, isNameArray, isNamedAPIResourceArray } from '../type-guards';

export function itemAttributeTests(itemAttribute: IItemAttribute): void {
  expect(itemAttribute.items).to.satisfy(isNamedAPIResourceArray);
  expect(itemAttribute.names).to.satisfy(isNameArray);
  expect(itemAttribute.descriptions).to.satisfy(isDescriptionArray);
}
