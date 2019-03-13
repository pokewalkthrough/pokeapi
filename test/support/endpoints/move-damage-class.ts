import { expect } from 'chai';

import { isDescriptionArray, isNameArray, isNamedAPIResourceArray } from '../type-guards';
import { IMoveDamageClass } from '../../../src/types';

export function moveDamageClassTests(moveDamageClass: IMoveDamageClass): void {
  expect(moveDamageClass.descriptions).to.satisfy(isDescriptionArray);
  expect(moveDamageClass.moves).to.satisfy(isNamedAPIResourceArray);
  expect(moveDamageClass.names).to.satisfy(isNameArray);
}
