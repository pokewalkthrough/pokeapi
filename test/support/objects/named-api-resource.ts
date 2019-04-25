import { expect } from 'chai';

import { INamedAPIResource } from '../../../src/interfaces';
import { stringTest } from '../primitives';

export function namedAPIResourceTest(allowNull: false, ...args: INamedAPIResource[]): void;
export function namedAPIResourceTest(allowNull: true, ...args: Array<INamedAPIResource | null>): void;
export function namedAPIResourceTest(allowNull: boolean, ...args: Array<INamedAPIResource | null>): void {
  args.forEach(
    (namedAPIResource: INamedAPIResource | null): void => {
      if (allowNull) {
        expect(namedAPIResource).to.be.oneOf(['object', null]);
      } else {
        expect(namedAPIResource)
          .to.be.an('object')
          .and.to.have.keys(['name', 'url']);
      }

      if (namedAPIResource) {
        stringTest(false, namedAPIResource.name, namedAPIResource.url);
      }
    },
  );
}
