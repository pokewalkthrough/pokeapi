import { expect } from 'chai';

import { ILocation } from '../../../src/interfaces';
import { isGenerationGameIndexArray, isNameArray, isNamedAPIResourceArray, isNamedAPIResourceOrNull } from '../type-guards';

export function locationTests(location: ILocation): void {
  expect(location.region).to.satisfy(isNamedAPIResourceOrNull);
  expect(location.names).to.satisfy(isNameArray);
  expect(location.game_indices).to.satisfy(isGenerationGameIndexArray);
  expect(location.areas).to.satisfy(isNamedAPIResourceArray);
}
