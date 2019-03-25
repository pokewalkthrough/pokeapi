import { expect } from 'chai';

import { IType } from '../../../src/interfaces';
import {
  isGenerationGameIndexArray,
  isNameArray,
  isNamedAPIResource,
  isNamedAPIResourceArray,
  isNamedAPIResourceOrNull,
  isTypePokemonArray,
  isTypeRelations,
} from '../type-guards';

export function typeTests(type: IType): void {
  expect(type.damage_relations).to.satisfy(isTypeRelations);
  expect(type.game_indices).to.satisfy(isGenerationGameIndexArray);
  expect(type.generation).to.satisfy(isNamedAPIResource);
  expect(type.move_damage_class).to.satisfy(isNamedAPIResourceOrNull);
  expect(type.names).to.satisfy(isNameArray);
  expect(type.pokemon).to.satisfy(isTypePokemonArray);
  expect(type.moves).to.satisfy(isNamedAPIResourceArray);
}
