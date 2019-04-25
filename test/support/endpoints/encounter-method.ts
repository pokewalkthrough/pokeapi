import { expect } from 'chai';

import { IEncounterMethod } from '../../../src/interfaces';
import { nameTest } from '../objects';
import { numberTest, stringTest } from '../primitives';

export function encounterMethodTest(encounterMethod: IEncounterMethod): void {
  expect(encounterMethod)
    .to.be.an('object')
    .and.to.have.keys(['id', 'name', 'names', 'order']);

  nameTest(...encounterMethod.names);
  numberTest(false, encounterMethod.id, encounterMethod.order);
  stringTest(false, encounterMethod.name);
}
