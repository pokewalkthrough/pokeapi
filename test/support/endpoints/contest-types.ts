import { expect } from 'chai';

import { IContestType } from '../../../src/interfaces';
import { isContestNameArray, isNamedAPIResource } from '../type-guards';

export function contestTypeTests(contestType: IContestType): void {
  expect(contestType.berry_flavor).to.satisfy(isNamedAPIResource);
  expect(contestType.names).to.satisfy(isContestNameArray);
}
