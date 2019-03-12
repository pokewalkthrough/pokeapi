import { expect } from 'chai';

import { IMoveCategory } from '../../../src/interfaces';
import { isDescriptionArray, isNamedAPIResourceArray } from '../type-guards';

export function moveCategoryTests(moveCategory: IMoveCategory): void {
  expect(moveCategory.moves).to.satisfy(isNamedAPIResourceArray);
  expect(moveCategory.descriptions).to.satisfy(isDescriptionArray);
}
