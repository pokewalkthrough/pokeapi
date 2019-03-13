import { expect } from 'chai';

import { isDescriptionArray, isNamedAPIResourceArray } from '../type-guards';
import { IMoveCategory } from '../../../src/types';

export function moveCategoryTests(moveCategory: IMoveCategory): void {
  expect(moveCategory.moves).to.satisfy(isNamedAPIResourceArray);
  expect(moveCategory.descriptions).to.satisfy(isDescriptionArray);
}
