import { expect } from 'chai';

import { IFlavorText } from '../../../src/interfaces';
import { stringTest } from '../primitives';

import { namedAPIResourceTest } from './named-api-resource';

export function flavorTextTest(...args: IFlavorText[]): void {
  args.forEach(
    (flavorText: IFlavorText): void => {
      expect(flavorText)
        .to.be.an('object')
        .and.to.have.keys(['flavor_text', 'language']);

      stringTest(false, flavorText.flavor_text);
      namedAPIResourceTest(flavorText.language);
    },
  );
}
