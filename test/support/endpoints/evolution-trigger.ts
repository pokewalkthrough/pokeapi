import { expect } from 'chai';

import { IEvolutionTrigger } from '../../../src/interfaces';
import { isNameArray, isNamedAPIResourceArray } from '../type-guards';

export function evolutionTriggerTests(evolutionTrigger: IEvolutionTrigger): void {
  expect(evolutionTrigger.names).to.satisfy(isNameArray);
  expect(evolutionTrigger.pokemon_species).to.satisfy(isNamedAPIResourceArray);
}
