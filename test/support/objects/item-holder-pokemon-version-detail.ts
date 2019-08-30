import { expect } from 'chai';

import { IItemHolderPokemonVersionDetail } from '../../../src/interfaces';
import { numberTest } from '../primitives';

import { namedAPIResourceTest } from './named-api-resource';

export function itemHolderPokemonVersionDetailTest(...args: IItemHolderPokemonVersionDetail[]): void {
  args.forEach(
    (itemHolderPokemonVersionDetail: IItemHolderPokemonVersionDetail): void => {
      expect(itemHolderPokemonVersionDetail)
        .to.be.an('object')
        .and.to.have.keys(['rarity', 'version']);

      namedAPIResourceTest(false, itemHolderPokemonVersionDetail.version);
      numberTest(false, itemHolderPokemonVersionDetail.rarity);
    },
  );
}
