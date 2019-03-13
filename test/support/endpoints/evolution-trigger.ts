import { expect } from 'chai';

import { isNameArray, isNamedAPIResourceArray } from '../type-guards';
import { IEvolutionTrigger } from '../../../src/types';

export function evolutionTriggerTests(evolutionTrigger: IEvolutionTrigger): void {
  expect(evolutionTrigger.names).to.satisfy(isNameArray);
  expect(evolutionTrigger.pokemon_species).to.satisfy(isNamedAPIResourceArray);
}
