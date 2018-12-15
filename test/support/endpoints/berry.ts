import { expect } from 'chai';
import { IBerry } from '../../../src/interfaces';
import { isBerryFlavorMapArray, isNamedAPIResource } from '../type-guards';

export function berryTests(berry: IBerry): void {
  expect(berry.firmness).to.satisfy(isNamedAPIResource);
  expect(berry.flavors).to.satisfy(isBerryFlavorMapArray);
  expect(berry.growth_time).to.be.a('number');
  expect(berry.item).to.satisfy(isNamedAPIResource);
  expect(berry.max_harvest).to.be.a('number');
  expect(berry.natural_gift_power).to.be.a('number');
  expect(berry.natural_gift_type).to.satisfy(isNamedAPIResource);
  expect(berry.size).to.be.a('number');
  expect(berry.smoothness).to.be.a('number');
  expect(berry.soil_dryness).to.be.a('number');
}
