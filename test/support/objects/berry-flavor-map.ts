import { expect } from 'chai';

import { IBerryFlavorMap } from '../../../src/interfaces';
import { numberTest } from '../primitives';

import { namedAPIResourceTest } from './named-api-resource';

export function berryFlavorMapTest(...args: IBerryFlavorMap[]): void {
  args.forEach(
    (berryFlavorMap: IBerryFlavorMap): void => {
      expect(berryFlavorMap)
        .to.be.an('object')
        .and.to.have.keys(['flavor', 'potency']);

      namedAPIResourceTest(berryFlavorMap.flavor);
      numberTest(berryFlavorMap.potency);
    },
  );
}
