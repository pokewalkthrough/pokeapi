import { expect } from 'chai';

import { IEncounterMethod } from '../../../src/interfaces';
import { isNameArray } from '../type-guards';

export function encounterMethodTests(encounterMethod: IEncounterMethod): void {
  expect(encounterMethod.names).to.satisfy(isNameArray);
  expect(encounterMethod.order).to.be.a('number');
}
