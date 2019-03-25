import { expect } from 'chai';

import { IMoveBattleStyle } from '../../../src/interfaces';
import { isNameArray } from '../type-guards';

export function moveBattleStyleTests(moveBattleStyle: IMoveBattleStyle): void {
  expect(moveBattleStyle.names).to.satisfy(isNameArray);
}
