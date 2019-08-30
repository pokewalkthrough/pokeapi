import { expect } from 'chai';

import { IVersionGroupFlavorText } from '../../../src/interfaces';
import { stringTest } from '../primitives';

import { namedAPIResourceTest } from './named-api-resource';

export function versionGroupFlavorTextTest(...args: IVersionGroupFlavorText[]): void {
  args.forEach(
    (versionGroupFlavorText: IVersionGroupFlavorText): void => {
      expect(versionGroupFlavorText)
        .to.be.an('object')
        .and.to.have.keys(['language', 'text', 'version_group']);

      namedAPIResourceTest(false, versionGroupFlavorText.language, versionGroupFlavorText.version_group);
      stringTest(false, versionGroupFlavorText.text);
    },
  );
}
