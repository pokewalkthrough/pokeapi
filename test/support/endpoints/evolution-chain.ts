import { expect } from 'chai';

import { isChainLink, isNamedAPIResourceOrNull } from '../type-guards';
import { IEvolutionChain } from '../../../src/types';

export function evolutionChainTests(evolutionChain: IEvolutionChain): void {
  expect(evolutionChain.baby_trigger_item).to.satisfy(isNamedAPIResourceOrNull);
  expect(evolutionChain.chain).to.satisfy(isChainLink);
}
