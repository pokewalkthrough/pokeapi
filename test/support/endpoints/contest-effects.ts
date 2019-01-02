import { expect } from 'chai';
import { IContestEffect } from '../../../src/interfaces';
import { isEffectArray, isFlavorTextArray } from '../type-guards';

export function contestEffectTests(contestEffect: IContestEffect): void {
  expect(contestEffect.appeal).to.be.a('number');
  expect(contestEffect.effect_entries).to.satisfy(isEffectArray);
  expect(contestEffect.flavor_text_entries).to.satisfy(isFlavorTextArray);
  expect(contestEffect.jam).to.be.a('number');
}
