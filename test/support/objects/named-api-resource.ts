import { expect } from 'chai';

import { INamedAPIResource } from '../../../src/interfaces';
import { stringTest } from '../primitives';

// TODO: remove allowNull and just write better tests?
export function namedAPIResourceTest(allowNull: false, ...args: INamedAPIResource[]): void;
export function namedAPIResourceTest(allowNull: true, ...args: Array<INamedAPIResource | null>): void;
export function namedAPIResourceTest(allowNull: boolean, ...args: Array<INamedAPIResource | null>): void {
  args.forEach(
    (namedAPIResource: INamedAPIResource | null): void => {
      if (namedAPIResource) {
        expect(namedAPIResource)
          .to.be.an('object')
          .and.to.have.keys(['name', 'url']);

        stringTest(false, namedAPIResource.name, namedAPIResource.url);
      } else {
        if (allowNull) {
          expect(namedAPIResource).to.equal(null);
        } else {
          expect(namedAPIResource).to.not.equal(null);
        }
      }
    },
  );
}
