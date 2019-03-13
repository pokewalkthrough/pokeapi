import { expect } from 'chai';

import {
  isNamedAPIResource,
  isNamedAPIResourceArray,
  isPokemonAbilityArray,
  isPokemonHeldItemArray,
  isPokemonMoveArray,
  isPokemonSprites,
  isPokemonStatArray,
  isPokemonTypeArray,
  isVersionGameIndexArray,
} from '../type-guards';
import { IPokemon } from '../../../src/types';

export function pokemonTests(pokemon: IPokemon): void {
  expect(pokemon.base_experience).to.be.a('number');
  expect(pokemon.height).to.be.a('number');
  expect(pokemon.is_default).to.be.a('boolean');
  expect(pokemon.order).to.be.a('number');
  expect(pokemon.weight).to.be.a('number');
  expect(pokemon.abilities).to.satisfy(isPokemonAbilityArray);
  expect(pokemon.forms).to.satisfy(isNamedAPIResourceArray);
  expect(pokemon.game_indices).to.satisfy(isVersionGameIndexArray);
  expect(pokemon.held_items).to.satisfy(isPokemonHeldItemArray);
  expect(pokemon.location_area_encounters).to.be.a('string');
  expect(pokemon.moves).to.satisfy(isPokemonMoveArray);
  expect(pokemon.sprites).to.satisfy(isPokemonSprites);
  expect(pokemon.species).to.satisfy(isNamedAPIResource);
  expect(pokemon.stats).to.satisfy(isPokemonStatArray);
  expect(pokemon.types).to.satisfy(isPokemonTypeArray);
}
