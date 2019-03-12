import { expect } from 'chai';

import { IGender } from '../../../src/interfaces';
import { isNamedAPIResourceArray, isPokemonSpeciesGenderArray } from '../type-guards';

export function genderTests(gender: IGender): void {
  expect(gender.pokemon_species_details).to.satisfy(isPokemonSpeciesGenderArray);
  expect(gender.required_for_evolution).to.satisfy(isNamedAPIResourceArray);
}
