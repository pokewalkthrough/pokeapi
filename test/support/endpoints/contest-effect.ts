import { expect } from 'chai';

import { isEffectArray, isFlavorTextArray } from '../type-guards';
import { IContestEffect } from '../../../src/types';

export function contestEffectTests(contestEffect: IContestEffect): void {
  expect(contestEffect.appeal).to.be.a('number');
  expect(contestEffect.effect_entries).to.satisfy(isEffectArray);
  expect(contestEffect.flavor_text_entries).to.satisfy(isFlavorTextArray);
  expect(contestEffect.jam).to.be.a('number');
}
