import { expect } from 'chai';

import { IVerboseEffect } from '../../../src/interfaces';
import { stringTest } from '../primitives';

import { namedAPIResourceTest } from './named-api-resource';

export function verboseEffectTest(...args: IVerboseEffect[]): void {
  args.forEach(
    (verboseEffect: IVerboseEffect): void => {
      expect(verboseEffect)
        .to.be.an('object')
        .and.to.have.keys(['effect', 'language', 'short_effect']);

      namedAPIResourceTest(false, verboseEffect.language);
      stringTest(false, verboseEffect.effect, verboseEffect.short_effect);
    },
  );
}
