import { expect } from 'chai';

import { IEncounterCondition } from '../../../src/interfaces';
import { isNameArray, isNamedAPIResourceArray } from '../type-guards';

export function encounterConditionTests(encounterCondition: IEncounterCondition): void {
  expect(encounterCondition.names).to.satisfy(isNameArray);
  expect(encounterCondition.values).to.satisfy(isNamedAPIResourceArray);
}
