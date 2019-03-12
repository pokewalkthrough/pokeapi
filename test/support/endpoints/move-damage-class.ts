import { expect } from 'chai';

import { IMoveDamageClass } from '../../../src/interfaces';
import { isDescriptionArray, isNameArray, isNamedAPIResourceArray } from '../type-guards';

export function moveDamageClassTests(moveDamageClass: IMoveDamageClass): void {
  expect(moveDamageClass.descriptions).to.satisfy(isDescriptionArray);
  expect(moveDamageClass.moves).to.satisfy(isNamedAPIResourceArray);
  expect(moveDamageClass.names).to.satisfy(isNameArray);
}
