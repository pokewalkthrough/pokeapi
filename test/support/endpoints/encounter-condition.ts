import { expect } from 'chai';

import { IEncounterCondition } from '../../../src/interfaces';
import { nameTest, namedAPIResourceTest } from '../objects';
import { numberTest, stringTest } from '../primitives';

export function encounterConditionTest(encounterCondition: IEncounterCondition): void {
  expect(encounterCondition)
    .to.be.an('object')
    .and.to.have.keys(['id', 'name', 'names', 'values']);

  nameTest(...encounterCondition.names);
  namedAPIResourceTest(false, ...encounterCondition.values);
  numberTest(false, encounterCondition.id);
  stringTest(false, encounterCondition.name);
}
