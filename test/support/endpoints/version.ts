import { expect } from 'chai';

import { IVersion } from '../../../src/interfaces';
import { nameTest, namedAPIResourceTest } from '../objects';
import { numberTest, stringTest } from '../primitives';

export function versionTest(version: IVersion): void {
  expect(version)
    .to.be.an('object')
    .and.to.have.keys(['id', 'name', 'names', 'version_group']);

  nameTest(...version.names);
  namedAPIResourceTest(false, version.version_group);
  numberTest(false, version.id);
  stringTest(false, version.name);
}
