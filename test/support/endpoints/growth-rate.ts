import { expect } from 'chai';

import { IGrowthRate } from '../../../src/interfaces';
import { isDescriptionArray, isGrowthRateExperienceLevelArray, isNamedAPIResourceArray } from '../type-guards';

export function growthRateTests(growthRate: IGrowthRate): void {
  expect(growthRate.formula).to.be.a('string');
  expect(growthRate.descriptions).to.satisfy(isDescriptionArray);
  expect(growthRate.levels).to.satisfy(isGrowthRateExperienceLevelArray);
  expect(growthRate.pokemon_species).to.satisfy(isNamedAPIResourceArray);
}
