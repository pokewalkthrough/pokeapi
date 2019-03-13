import { expect } from 'chai';

import { isAPIResourceArray, isMoveStatAffectSets, isNameArray, isNamedAPIResourceOrNull, isNatureStatAffectSets } from '../type-guards';
import { IStat } from '../../../src/types';

export function statTests(stat: IStat): void {
  expect(stat.game_index).to.be.a('number');
  expect(stat.is_battle_only).to.be.a('boolean');
  expect(stat.affecting_moves).to.satisfy(isMoveStatAffectSets);
  expect(stat.affecting_natures).to.satisfy(isNatureStatAffectSets);
  expect(stat.characteristics).to.satisfy(isAPIResourceArray);
  expect(stat.move_damage_class).to.satisfy(isNamedAPIResourceOrNull);
  expect(stat.names).to.satisfy(isNameArray);
}
