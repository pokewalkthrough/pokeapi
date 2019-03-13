import { expect } from 'chai';

import { isContestNameArray, isNamedAPIResource } from '../type-guards';
import { IContestType } from '../../../src/types';

export function contestTypeTests(contestType: IContestType): void {
  expect(contestType.berry_flavor).to.satisfy(isNamedAPIResource);
  expect(contestType.names).to.satisfy(isContestNameArray);
}
