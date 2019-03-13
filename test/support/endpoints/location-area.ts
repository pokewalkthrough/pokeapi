import { expect } from 'chai';

import { isEncounterMethodRateArray, isNameArray, isNamedAPIResource, isPokemonEncounterArray } from '../type-guards';
import { ILocationArea } from '../../../src/types';

export function locationAreaTests(locationArea: ILocationArea): void {
  expect(locationArea.game_index).to.be.a('number');
  expect(locationArea.encounter_method_rates).to.satisfy(isEncounterMethodRateArray);
  expect(locationArea.location).to.satisfy(isNamedAPIResource);
  expect(locationArea.names).to.satisfy(isNameArray);
  expect(locationArea.pokemon_encounters).to.satisfy(isPokemonEncounterArray);
}
