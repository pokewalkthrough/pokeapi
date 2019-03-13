import { expect } from 'chai';

import { isEffectArray, isNamedAPIResourceArray } from '../type-guards';
import { IItemFlingEffect } from '../../../src/types';

export function itemFlingEffectTests(itemFlingEffect: IItemFlingEffect): void {
  expect(itemFlingEffect.effect_entries).to.satisfy(isEffectArray);
  expect(itemFlingEffect.items).to.satisfy(isNamedAPIResourceArray);
}
