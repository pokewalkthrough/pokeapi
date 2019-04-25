import { expect } from 'chai';

import { IBerryFlavor } from '../../../src/interfaces';
import { flavorBerryMapTest, nameTest, namedAPIResourceTest } from '../objects';
import { numberTest, stringTest } from '../primitives';

export function berryFlavorTest(berryFlavor: IBerryFlavor): void {
  expect(berryFlavor)
    .to.be.an('object')
    .and.to.have.keys(['berries', 'contest_type', 'id', 'name', 'names']);

  flavorBerryMapTest(...berryFlavor.berries);
  namedAPIResourceTest(false, berryFlavor.contest_type);
  numberTest(false, berryFlavor.id);
  stringTest(false, berryFlavor.name);
  nameTest(...berryFlavor.names);
}
