import { expect } from 'chai';

import { isDescriptionArray, isNameArray, isNamedAPIResourceArray } from '../type-guards';
import { IMoveLearnMethod } from '../../../src/types';

export function moveLearnMethodTests(moveLearnMethod: IMoveLearnMethod): void {
  expect(moveLearnMethod.descriptions).to.satisfy(isDescriptionArray);
  expect(moveLearnMethod.names).to.satisfy(isNameArray);
  expect(moveLearnMethod.version_groups).to.satisfy(isNamedAPIResourceArray);
}
