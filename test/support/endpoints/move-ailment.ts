import { expect } from 'chai';

import { isNameArray, isNamedAPIResourceArray } from '../type-guards';
import { IMoveAilment } from '../../../src/types';

export function moveAilmentTests(moveAilment: IMoveAilment): void {
  expect(moveAilment.moves).to.satisfy(isNamedAPIResourceArray);
  expect(moveAilment.names).to.satisfy(isNameArray);
}
