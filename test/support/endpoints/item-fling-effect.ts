import { expect } from 'chai';

import { IItemFlingEffect } from '../../../src/interfaces';
import { isEffectArray, isNamedAPIResourceArray } from '../type-guards';

export function itemFlingEffectTests(itemFlingEffect: IItemFlingEffect): void {
  expect(itemFlingEffect.effect_entries).to.satisfy(isEffectArray);
  expect(itemFlingEffect.items).to.satisfy(isNamedAPIResourceArray);
}
