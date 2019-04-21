import { expect } from 'chai';

import { IName } from '../../../src/interfaces';
import { stringTest } from '../primitives';

import { namedAPIResourceTest } from './named-api-resource';

export function nameTest(...args: IName[]): void {
  args.forEach(
    (name: IName): void => {
      expect(name)
        .to.be.an('object')
        .and.to.have.keys(['language', 'name']);

      namedAPIResourceTest(name.language);
      stringTest(false, name.name);
    },
  );
}
