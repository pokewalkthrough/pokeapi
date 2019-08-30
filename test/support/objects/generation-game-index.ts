import { expect } from 'chai';

import { IGenerationGameIndex } from '../../../src/interfaces';
import { numberTest } from '../primitives';

import { namedAPIResourceTest } from './named-api-resource';

export function generationGameIndexTest(...args: IGenerationGameIndex[]): void {
  args.forEach(
    (generationGameIndex: IGenerationGameIndex): void => {
      expect(generationGameIndex)
        .to.be.an('object')
        .and.to.have.keys(['game_index', 'generation']);

      namedAPIResourceTest(false, generationGameIndex.generation);
      numberTest(false, generationGameIndex.game_index);
    },
  );
}
