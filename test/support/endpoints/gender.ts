import { expect } from 'chai';

import { isNamedAPIResourceArray, isPokemonSpeciesGenderArray } from '../type-guards';
import { IGender } from '../../../src/types';

export function genderTests(gender: IGender): void {
  expect(gender.pokemon_species_details).to.satisfy(isPokemonSpeciesGenderArray);
  expect(gender.required_for_evolution).to.satisfy(isNamedAPIResourceArray);
}
