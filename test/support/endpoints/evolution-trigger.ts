import { expect } from 'chai';

import { IEvolutionTrigger } from '../../../src/interfaces';
import { nameTest, namedAPIResourceTest } from '../objects';
import { numberTest, stringTest } from '../primitives';

export function evolutionTriggerTest(evolutionTrigger: IEvolutionTrigger): void {
  expect(evolutionTrigger)
    .to.be.an('object')
    .and.to.have.keys(['id', 'name', 'names', 'pokemon_species']);

  nameTest(...evolutionTrigger.names);
  namedAPIResourceTest(false, ...evolutionTrigger.pokemon_species);
  numberTest(false, evolutionTrigger.id);
  stringTest(false, evolutionTrigger.name);
}
