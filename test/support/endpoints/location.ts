import { expect } from 'chai';

import { isGenerationGameIndexArray, isNameArray, isNamedAPIResourceArray, isNamedAPIResourceOrNull } from '../type-guards';
import { ILocation } from '../../../src/types';

export function locationTests(location: ILocation): void {
  expect(location.region).to.satisfy(isNamedAPIResourceOrNull);
  expect(location.names).to.satisfy(isNameArray);
  expect(location.game_indices).to.satisfy(isGenerationGameIndexArray);
  expect(location.areas).to.satisfy(isNamedAPIResourceArray);
}
