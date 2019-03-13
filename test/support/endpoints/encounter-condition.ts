import { expect } from 'chai';

import { isNameArray, isNamedAPIResourceArray } from '../type-guards';
import { IEncounterCondition } from '../../../src/types';

export function encounterConditionTests(encounterCondition: IEncounterCondition): void {
  expect(encounterCondition.names).to.satisfy(isNameArray);
  expect(encounterCondition.values).to.satisfy(isNamedAPIResourceArray);
}
