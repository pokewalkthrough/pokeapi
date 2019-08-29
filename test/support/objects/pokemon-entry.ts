import { expect } from 'chai';

import { IPokemonEntry } from '../../../src/interfaces';
import { numberTest } from '../primitives';

import { namedAPIResourceTest } from './named-api-resource';

export function pokemonEntryTest(...args: IPokemonEntry[]): void {
  args.forEach(
    (pokemonEntry: IPokemonEntry): void => {
      expect(pokemonEntry)
        .to.be.an('object')
        .and.to.have.keys(['entry_number', 'pokemon_species']);

      numberTest(false, pokemonEntry.entry_number);
      namedAPIResourceTest(false, pokemonEntry.pokemon_species);
    },
  );
}
