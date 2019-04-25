import { expect } from 'chai';

import { IFlavorBerryMap } from '../../../src/interfaces';
import { numberTest } from '../primitives';

import { namedAPIResourceTest } from './named-api-resource';

export function flavorBerryMapTest(...args: IFlavorBerryMap[]): void {
  args.forEach(
    (flavorBerryMap: IFlavorBerryMap): void => {
      expect(flavorBerryMap)
        .to.be.an('object')
        .and.to.have.keys(['berry', 'potency']);

      namedAPIResourceTest(flavorBerryMap.berry);
      numberTest(flavorBerryMap.potency);
    },
  );
}
