import { expect } from 'chai';

import { INamedAPIResource } from '../../../src/interfaces';
import { stringTest } from '../primitives';

export function namedAPIResourceTest(...args: INamedAPIResource[]): void {
  args.forEach(
    (namedAPIResource: INamedAPIResource): void => {
      expect(namedAPIResource)
        .to.be.an('object')
        .and.to.have.keys(['name', 'url']);

      stringTest(false, namedAPIResource.name, namedAPIResource.url);
    },
  );
}
