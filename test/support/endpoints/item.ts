import { expect } from 'chai';

import { IItem } from '../../../src/interfaces';
import {
  apiResourceTest,
  generationGameIndexTest,
  itemHolderPokemonTest,
  itemSpritesTest,
  machineVersionDetailTest,
  nameTest,
  namedAPIResourceTest,
  verboseEffectTest,
  versionGroupFlavorTextTest,
} from '../objects';
import { numberTest, stringTest } from '../primitives';

export function itemTest(item: IItem): void {
  expect(item)
    .to.be.an('object')
    .and.to.have.keys([
      'attributes',
      'baby_trigger_for',
      'category',
      'cost',
      'effect_entries',
      'flavor_text_entries',
      'fling_effect',
      'fling_power',
      'game_indices',
      'held_by_pokemon',
      'id',
      'machines',
      'name',
      'names',
      'sprites',
    ]);

  apiResourceTest(true, item.baby_trigger_for);
  generationGameIndexTest(...item.game_indices);
  itemHolderPokemonTest(...item.held_by_pokemon);
  itemSpritesTest(item.sprites);
  machineVersionDetailTest(...item.machines);
  nameTest(...item.names);
  namedAPIResourceTest(true, item.fling_effect);
  namedAPIResourceTest(false, ...item.attributes, item.category);
  numberTest(true, item.fling_power);
  numberTest(false, item.cost, item.id);
  stringTest(false, item.name);
  verboseEffectTest(...item.effect_entries);
  versionGroupFlavorTextTest(...item.flavor_text_entries);
}
