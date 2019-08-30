import { expect } from 'chai';

import { IAPIResource } from '../../../src/interfaces';
import { stringTest } from '../primitives';

export function apiResourceTest(allowNull: false, ...args: IAPIResource[]): void;
export function apiResourceTest(allowNull: true, ...args: Array<IAPIResource | null>): void;
export function apiResourceTest(allowNull: boolean, ...args: Array<IAPIResource | null>): void {
  args.forEach(
    (apiResource: IAPIResource | null): void => {
      if (apiResource) {
        expect(apiResource)
          .to.be.an('object')
          .and.to.have.keys(['url']);

        stringTest(false, apiResource.url);
      } else {
        if (allowNull) {
          expect(apiResource).to.equal(null);
        } else {
          expect(apiResource).to.not.equal(null);
        }
      }
    },
  );
}
