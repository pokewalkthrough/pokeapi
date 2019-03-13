import { expect } from 'chai';

import { isNameArray, isPalParkEncounterSpeciesArray } from '../type-guards';
import { IPalParkArea } from '../../../src/types';

export function palParkAreaTests(palParkArea: IPalParkArea): void {
  expect(palParkArea.names).to.satisfy(isNameArray);
  expect(palParkArea.pokemon_encounters).to.satisfy(isPalParkEncounterSpeciesArray);
}
