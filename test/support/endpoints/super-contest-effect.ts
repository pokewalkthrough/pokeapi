import { expect } from 'chai';

import { isFlavorTextArray, isNamedAPIResourceArray } from '../type-guards';
import { ISuperContestEffect } from '../../../src/types';

export function superContestEffectTests(superContestEffect: ISuperContestEffect): void {
  expect(superContestEffect.appeal).to.be.a('number');
  expect(superContestEffect.flavor_text_entries).to.satisfy(isFlavorTextArray);
  expect(superContestEffect.moves).to.satisfy(isNamedAPIResourceArray);
}
