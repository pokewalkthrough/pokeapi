import { expect } from 'chai';

import { isNameArray } from '../type-guards';
import { IEncounterMethod } from '../../../src/types';

export function encounterMethodTests(encounterMethod: IEncounterMethod): void {
  expect(encounterMethod.names).to.satisfy(isNameArray);
  expect(encounterMethod.order).to.be.a('number');
}
