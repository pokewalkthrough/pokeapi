import { expect } from 'chai';

import { IMove } from '../../../src/interfaces';
import {
  isAPIResourceOrNull,
  isAbilityEffectChangeArray,
  isContestComboSetsOrNull,
  isMachineVersionDetailArray,
  isMoveFlavorTextArray,
  isMoveMetaData,
  isMoveStatChangeArray,
  isNameArray,
  isNamedAPIResource,
  isNamedAPIResourceOrNull,
  isNumberOrNull,
  isPastMoveStatValuesArray,
  isVerboseEffectArray,
} from '../type-guards';

export function moveTests(move: IMove): void {
  expect(move.accuracy).to.be.a('number');
  expect(move.effect_chance).to.satisfy(isNumberOrNull);
  expect(move.pp).to.be.a('number');
  expect(move.priority).to.be.a('number');
  expect(move.power).to.satisfy(isNumberOrNull);
  expect(move.contest_combos).to.satisfy(isContestComboSetsOrNull);
  expect(move.contest_type).to.satisfy(isNamedAPIResourceOrNull);
  expect(move.contest_effect).to.satisfy(isAPIResourceOrNull);
  expect(move.damage_class).to.satisfy(isNamedAPIResource);
  expect(move.effect_entries).to.satisfy(isVerboseEffectArray);
  expect(move.effect_changes).to.satisfy(isAbilityEffectChangeArray);
  expect(move.flavor_text_entries).to.satisfy(isMoveFlavorTextArray);
  expect(move.generation).to.satisfy(isNamedAPIResource);
  expect(move.machines).to.satisfy(isMachineVersionDetailArray);
  expect(move.meta).to.satisfy(isMoveMetaData);
  expect(move.names).to.satisfy(isNameArray);
  expect(move.past_values).to.satisfy(isPastMoveStatValuesArray);
  expect(move.stat_changes).to.satisfy(isMoveStatChangeArray);
  expect(move.super_contest_effect).to.satisfy(isAPIResourceOrNull);
  expect(move.target).to.satisfy(isNamedAPIResource);
  expect(move.type).to.satisfy(isNamedAPIResource);
}
