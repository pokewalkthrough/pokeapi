import { expect } from 'chai';

import { IChainLink } from '../../../src/interfaces';
import { booleanTest } from '../primitives';

import { evolutionDetailTest } from './evolution-detail';
import { namedAPIResourceTest } from './named-api-resource';

export function chainLinkTest(...args: IChainLink[]): void {
  args.forEach(
    (chainLink: IChainLink): void => {
      expect(chainLink)
        .to.be.an('object')
        .and.to.have.keys(['evolution_details', 'evolves_to', 'is_baby', 'species']);

      booleanTest(chainLink.is_baby);
      chainLinkTest(...chainLink.evolves_to);
      evolutionDetailTest(...chainLink.evolution_details);
      namedAPIResourceTest(false, chainLink.species);
    },
  );
}
