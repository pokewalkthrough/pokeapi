import { expect } from 'chai';

import { IEvolutionChain } from '../../../src/interfaces';
import { chainLinkTest, namedAPIResourceTest } from '../objects';
import { numberTest } from '../primitives';

export function evolutionChainTest(evolutionChain: IEvolutionChain): void {
  expect(evolutionChain)
    .to.be.an('object')
    .and.to.have.keys(['baby_trigger_item', 'chain', 'id']);

  chainLinkTest(evolutionChain.chain);
  namedAPIResourceTest(true, evolutionChain.baby_trigger_item);
  numberTest(false, evolutionChain.id);
}
