import { expect } from 'chai';

import { IItemSprites } from '../../../src/interfaces';
import { stringTest } from '../primitives';

export function itemSpritesTest(...args: IItemSprites[]): void {
  args.forEach(
    (itemSprites: IItemSprites): void => {
      expect(itemSprites)
        .to.be.an('object')
        .and.to.have.keys(['default']);

      stringTest(true, itemSprites.default);
    },
  );
}
