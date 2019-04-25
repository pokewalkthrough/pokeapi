import { expect } from 'chai';

import { IContestName } from '../../../src/interfaces';
import { stringTest } from '../primitives';

import { namedAPIResourceTest } from './named-api-resource';

export function contestNameTest(...args: IContestName[]): void {
  args.forEach(
    (contestName: IContestName): void => {
      expect(contestName)
        .to.be.an('object')
        .and.to.have.keys(['color', 'language', 'name']);

      namedAPIResourceTest(contestName.language);
      stringTest(false, contestName.color, contestName.name);
    },
  );
}
