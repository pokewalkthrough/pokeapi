import { expect } from 'chai';

import { IBerryFirmness } from '../../../src/interfaces';
import { nameTest, namedAPIResourceTest } from '../objects';
import { numberTest, stringTest } from '../primitives';

export function berryFirmnessTest(berryFirmness: IBerryFirmness): void {
  expect(berryFirmness)
    .to.be.an('object')
    .and.to.have.keys(['berries', 'id', 'name', 'names']);

  nameTest(...berryFirmness.names);
  namedAPIResourceTest(false, ...berryFirmness.berries);
  numberTest(false, berryFirmness.id);
  stringTest(false, berryFirmness.name);
}
