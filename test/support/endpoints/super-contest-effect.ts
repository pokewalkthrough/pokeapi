import { expect } from 'chai';

import { ISuperContestEffect } from '../../../src/interfaces';
import { isFlavorTextArray, isNamedAPIResourceArray } from '../type-guards';

export function superContestEffectTests(superContestEffect: ISuperContestEffect): void {
  expect(superContestEffect.appeal).to.be.a('number');
  expect(superContestEffect.flavor_text_entries).to.satisfy(isFlavorTextArray);
  expect(superContestEffect.moves).to.satisfy(isNamedAPIResourceArray);
}
