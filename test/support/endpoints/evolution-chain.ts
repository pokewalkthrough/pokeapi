import { expect } from 'chai';

import { IEvolutionChain } from '../../../src/interfaces';
import { isChainLink, isNamedAPIResourceOrNull } from '../type-guards';

export function evolutionChainTests(evolutionChain: IEvolutionChain): void {
  expect(evolutionChain.baby_trigger_item).to.satisfy(isNamedAPIResourceOrNull);
  expect(evolutionChain.chain).to.satisfy(isChainLink);
}
