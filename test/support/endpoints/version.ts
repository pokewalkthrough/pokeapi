import { expect } from 'chai';

import { isNameArray, isNamedAPIResource } from '../type-guards';
import { IVersion } from '../../../src/types';

export function versionTests(version: IVersion): void {
  expect(version.names).to.satisfy(isNameArray);
  expect(version.version_group).to.satisfy(isNamedAPIResource);
}
