import { expect } from 'chai';

import { IDescription } from '../../../src/interfaces';
import { stringTest } from '../primitives';

import { namedAPIResourceTest } from './named-api-resource';

export function descriptionTest(...args: IDescription[]): void {
  args.forEach(
    (description: IDescription): void => {
      expect(description)
        .to.be.an('object')
        .and.to.have.keys(['description', 'language']);

      stringTest(false, description.description);
      namedAPIResourceTest(false, description.language);
    },
  );
}
