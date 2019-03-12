import { expect } from 'chai';

import { IPalParkArea } from '../../../src/interfaces';
import { isNameArray, isPalParkEncounterSpeciesArray } from '../type-guards';

export function palParkAreaTests(palParkArea: IPalParkArea): void {
  expect(palParkArea.names).to.satisfy(isNameArray);
  expect(palParkArea.pokemon_encounters).to.satisfy(isPalParkEncounterSpeciesArray);
}
