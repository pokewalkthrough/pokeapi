import { expect } from 'chai';

import { IContestType } from '../../../src/interfaces';
import { contestNameTest, namedAPIResourceTest } from '../objects';
import { numberTest, stringTest } from '../primitives';

export function contestTypeTest(contestType: IContestType): void {
  expect(contestType)
    .to.be.an('object')
    .and.to.have.keys(['berry_flavor', 'id', 'name', 'names']);

  contestNameTest(...contestType.names);
  namedAPIResourceTest(contestType.berry_flavor);
  numberTest(contestType.id);
  stringTest(false, contestType.name);
}
