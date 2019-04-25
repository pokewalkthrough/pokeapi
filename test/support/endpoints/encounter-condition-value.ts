import { expect } from 'chai';

import { IEncounterConditionValue } from '../../../src/interfaces';
import { nameTest, namedAPIResourceTest } from '../objects';
import { numberTest, stringTest } from '../primitives';

export function encounterConditionValueTest(encounterConditionValue: IEncounterConditionValue): void {
  expect(encounterConditionValue)
    .to.be.an('object')
    .and.to.have.keys(['condition', 'id', 'name', 'names']);

  nameTest(...encounterConditionValue.names);
  namedAPIResourceTest(false, encounterConditionValue.condition);
  numberTest(false, encounterConditionValue.id);
  stringTest(false, encounterConditionValue.name);
}
