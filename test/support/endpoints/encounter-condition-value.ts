import { expect } from 'chai';

import { IEncounterConditionValue } from '../../../src/interfaces';
import { isNameArray, isNamedAPIResource } from '../type-guards';

export function encounterConditionValueTests(encounterConditionValue: IEncounterConditionValue): void {
  expect(encounterConditionValue.condition).to.satisfy(isNamedAPIResource);
  expect(encounterConditionValue.names).to.satisfy(isNameArray);
}
