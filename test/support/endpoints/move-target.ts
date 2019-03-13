import { expect } from 'chai';

import { isDescriptionArray, isNameArray, isNamedAPIResourceArray } from '../type-guards';
import { IMoveTarget } from '../../../src/types';

export function moveTargetTests(moveTarget: IMoveTarget): void {
  expect(moveTarget.descriptions).to.satisfy(isDescriptionArray);
  expect(moveTarget.moves).to.satisfy(isNamedAPIResourceArray);
  expect(moveTarget.names).to.satisfy(isNameArray);
}
