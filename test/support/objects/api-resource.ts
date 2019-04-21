import { expect } from 'chai';

import { IAPIResource } from '../../../src/interfaces';
import { stringTest } from '../primitives';

export function apiResourceTest(...args: IAPIResource[]): void {
  args.forEach(
    (apiResource: IAPIResource): void => {
      expect(apiResource)
        .to.be.an('object')
        .and.to.have.keys(['url']);

      stringTest(false, apiResource.url);
    },
  );
}
