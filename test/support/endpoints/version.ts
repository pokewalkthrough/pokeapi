import { expect } from 'chai';

import { IVersion } from '../../../src/interfaces';
import { isNameArray, isNamedAPIResource } from '../type-guards';

export function versionTests(version: IVersion): void {
  expect(version.names).to.satisfy(isNameArray);
  expect(version.version_group).to.satisfy(isNamedAPIResource);
}
