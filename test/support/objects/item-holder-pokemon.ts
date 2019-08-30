import { expect } from 'chai';

import { IItemHolderPokemon } from '../../../src/interfaces';

import { itemHolderPokemonVersionDetailTest } from './item-holder-pokemon-version-detail';
import { namedAPIResourceTest } from './named-api-resource';

export function itemHolderPokemonTest(...args: IItemHolderPokemon[]): void {
  args.forEach(
    (itemHolderPokemon: IItemHolderPokemon): void => {
      expect(itemHolderPokemon)
        .to.be.an('object')
        .and.to.have.keys(['pokemon', 'version_details']);

      namedAPIResourceTest(false, itemHolderPokemon.pokemon);
      itemHolderPokemonVersionDetailTest(...itemHolderPokemon.version_details);
    },
  );
}
