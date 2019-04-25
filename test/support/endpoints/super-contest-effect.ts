import { expect } from 'chai';

import { ISuperContestEffect } from '../../../src/interfaces';
import { flavorTextTest, namedAPIResourceTest } from '../objects';
import { numberTest } from '../primitives';

export function superContestEffectTest(superContestEffect: ISuperContestEffect): void {
  expect(superContestEffect)
    .to.be.an('object')
    .and.to.have.keys(['appeal', 'flavor_text_entries', 'id', 'moves']);

  flavorTextTest(...superContestEffect.flavor_text_entries);
  namedAPIResourceTest(false, ...superContestEffect.moves);
  numberTest(false, superContestEffect.appeal, superContestEffect.id);
}
