import { expect } from 'chai';

import { IBerry } from '../../../src/interfaces';
import { berryFlavorMapTest, namedAPIResourceTest } from '../objects';
import { numberTest, stringTest } from '../primitives';

export function berryTest(berry: IBerry): void {
  expect(berry)
    .to.be.an('object')
    .and.to.have.keys([
      'firmness',
      'flavors',
      'growth_time',
      'id',
      'item',
      'max_harvest',
      'name',
      'natural_gift_power',
      'natural_gift_type',
      'size',
      'smoothness',
      'soil_dryness',
    ]);

  berryFlavorMapTest(...berry.flavors);
  namedAPIResourceTest(false, berry.firmness, berry.item, berry.natural_gift_type);
  numberTest(false, berry.growth_time, berry.id, berry.max_harvest, berry.natural_gift_power, berry.size, berry.smoothness, berry.soil_dryness);
  stringTest(false, berry.name);
}
