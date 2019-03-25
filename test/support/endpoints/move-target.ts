import { expect } from 'chai';

import { IMoveTarget } from '../../../src/interfaces';
import { isDescriptionArray, isNameArray, isNamedAPIResourceArray } from '../type-guards';

export function moveTargetTests(moveTarget: IMoveTarget): void {
  expect(moveTarget.descriptions).to.satisfy(isDescriptionArray);
  expect(moveTarget.moves).to.satisfy(isNamedAPIResourceArray);
  expect(moveTarget.names).to.satisfy(isNameArray);
}
