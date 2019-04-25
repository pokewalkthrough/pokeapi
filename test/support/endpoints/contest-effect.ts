import { expect } from 'chai';

import { IContestEffect } from '../../../src/interfaces';
import { effectTest, flavorTextTest } from '../objects';
import { numberTest } from '../primitives';

export function contestEffectTest(contestEffect: IContestEffect): void {
  expect(contestEffect)
    .to.be.an('object')
    .and.to.have.keys(['appeal', 'effect_entries', 'flavor_text_entries', 'id', 'jam']);

  numberTest(contestEffect.appeal, contestEffect.id, contestEffect.jam);
  effectTest(...contestEffect.effect_entries);
  flavorTextTest(...contestEffect.flavor_text_entries);
}
