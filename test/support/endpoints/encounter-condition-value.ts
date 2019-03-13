import { expect } from 'chai';

import { isNameArray, isNamedAPIResource } from '../type-guards';
import { IEncounterConditionValue } from '../../../src/types';

export function encounterConditionValueTests(encounterConditionValue: IEncounterConditionValue): void {
  expect(encounterConditionValue.condition).to.satisfy(isNamedAPIResource);
  expect(encounterConditionValue.names).to.satisfy(isNameArray);
}
