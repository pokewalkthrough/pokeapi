import { expect } from 'chai';

import { isNameArray } from '../type-guards';
import { IMoveBattleStyle } from '../../../src/types';

export function moveBattleStyleTests(moveBattleStyle: IMoveBattleStyle): void {
  expect(moveBattleStyle.names).to.satisfy(isNameArray);
}
