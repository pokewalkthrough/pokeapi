import { expect } from 'chai';

import {
  isAPIResourceOrNull,
  isGenerationGameIndexArray,
  isItemHolderPokemonArray,
  isItemSprites,
  isMachineVersionDetailArray,
  isNameArray,
  isNamedAPIResource,
  isNamedAPIResourceArray,
  isNamedAPIResourceOrNull,
  isNumberOrNull,
  isVerboseEffectArray,
  isVersionGroupFlavorTextArray,
} from '../type-guards';
import { IItem } from '../../../src/types';

export function itemTests(item: IItem): void {
  expect(item.cost).to.be.a('number');
  expect(item.fling_power).to.satisfy(isNumberOrNull);
  expect(item.fling_effect).to.satisfy(isNamedAPIResourceOrNull);
  expect(item.attributes).to.satisfy(isNamedAPIResourceArray);
  expect(item.category).to.satisfy(isNamedAPIResource);
  expect(item.effect_entries).to.satisfy(isVerboseEffectArray);
  expect(item.flavor_text_entries).to.satisfy(isVersionGroupFlavorTextArray);
  expect(item.game_indices).to.satisfy(isGenerationGameIndexArray);
  expect(item.names).to.satisfy(isNameArray);
  expect(item.sprites).to.satisfy(isItemSprites);
  expect(item.held_by_pokemon).to.satisfy(isItemHolderPokemonArray);
  expect(item.baby_trigger_for).to.satisfy(isAPIResourceOrNull);
  expect(item.machines).to.satisfy(isMachineVersionDetailArray);
}
