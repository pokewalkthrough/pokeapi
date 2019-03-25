import { expect } from 'chai';

import { IPokeathlonStat } from '../../../src/interfaces';
import { isNameArray, isNaturePokeathlonStatAffectSets } from '../type-guards';

export function pokeathlonStatTests(pokeathlonStat: IPokeathlonStat): void {
  expect(pokeathlonStat.names).to.satisfy(isNameArray);
  expect(pokeathlonStat.affecting_natures).to.satisfy(isNaturePokeathlonStatAffectSets);
}
