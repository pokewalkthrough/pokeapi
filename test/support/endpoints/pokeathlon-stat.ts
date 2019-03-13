import { expect } from 'chai';

import { isNameArray, isNaturePokeathlonStatAffectSets } from '../type-guards';
import { IPokeathlonStat } from '../../../src/types';

export function pokeathlonStatTests(pokeathlonStat: IPokeathlonStat): void {
  expect(pokeathlonStat.names).to.satisfy(isNameArray);
  expect(pokeathlonStat.affecting_natures).to.satisfy(isNaturePokeathlonStatAffectSets);
}
