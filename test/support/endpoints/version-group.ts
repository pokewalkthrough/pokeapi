import { expect } from 'chai';

import { IVersionGroup } from '../../../src/interfaces';
import { namedAPIResourceTest } from '../objects';
import { numberTest, stringTest } from '../primitives';

export function versionGroupTest(versionGroup: IVersionGroup): void {
  expect(versionGroup)
    .to.be.an('object')
    .and.to.have.keys(['generation', 'id', 'move_learn_methods', 'name', 'order', 'pokedexes', 'regions', 'versions']);

  namedAPIResourceTest(
    false,
    versionGroup.generation,
    ...versionGroup.move_learn_methods,
    ...versionGroup.pokedexes,
    ...versionGroup.regions,
    ...versionGroup.versions,
  );
  numberTest(false, versionGroup.id, versionGroup.order);
  stringTest(false, versionGroup.name);
}
