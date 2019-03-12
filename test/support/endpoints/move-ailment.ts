import { expect } from 'chai';

import { IMoveAilment } from '../../../src/interfaces';
import { isNameArray, isNamedAPIResourceArray } from '../type-guards';

export function moveAilmentTests(moveAilment: IMoveAilment): void {
  expect(moveAilment.moves).to.satisfy(isNamedAPIResourceArray);
  expect(moveAilment.names).to.satisfy(isNameArray);
}
