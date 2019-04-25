import { expect } from 'chai';

import { IEffect } from '../../../src/interfaces';
import { stringTest } from '../primitives';

import { namedAPIResourceTest } from './named-api-resource';

export function effectTest(...args: IEffect[]): void {
  args.forEach(
    (effect: IEffect): void => {
      expect(effect)
        .to.be.an('object')
        .and.to.have.keys(['effect', 'language']);

      namedAPIResourceTest(false, effect.language);
      stringTest(false, effect.effect);
    },
  );
}
