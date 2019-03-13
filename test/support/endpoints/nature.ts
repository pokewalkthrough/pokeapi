import { expect } from 'chai';

import { isMoveBattleStylePreferenceArray, isNameArray, isNamedAPIResourceOrNull, isNatureStatChangeArray } from '../type-guards';
import { INature } from '../../../src/types';

export function natureTests(nature: INature): void {
  expect(nature.decreased_stat).to.satisfy(isNamedAPIResourceOrNull);
  expect(nature.increased_stat).to.satisfy(isNamedAPIResourceOrNull);
  expect(nature.hates_flavor).to.satisfy(isNamedAPIResourceOrNull);
  expect(nature.likes_flavor).to.satisfy(isNamedAPIResourceOrNull);
  expect(nature.pokeathlon_stat_changes).to.satisfy(isNatureStatChangeArray);
  expect(nature.move_battle_style_preferences).to.satisfy(isMoveBattleStylePreferenceArray);
  expect(nature.names).to.satisfy(isNameArray);
}
