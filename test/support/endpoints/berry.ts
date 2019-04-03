import { expect } from 'chai';

import { IBerry } from '../../../src/interfaces';
import { isBerry } from '../type-guards';

export function berryTests(berry: IBerry): void {
  expect(berry).to.satisfy(isBerry);
}
