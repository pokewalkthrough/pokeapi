import { expect } from 'chai';

import { IPokemonForm } from '../../../src/interfaces';
import { isNameArray, isNamedAPIResource, isPokemonFormSprites } from '../type-guards';

export function pokemonFormTests(pokemonForm: IPokemonForm): void {
  expect(pokemonForm.order).to.be.a('number');
  expect(pokemonForm.form_order).to.be.a('number');
  expect(pokemonForm.is_default).to.be.a('boolean');
  expect(pokemonForm.is_battle_only).to.be.a('boolean');
  expect(pokemonForm.is_mega).to.be.a('boolean');
  expect(pokemonForm.form_name).to.be.a('string');
  expect(pokemonForm.pokemon).to.satisfy(isNamedAPIResource);
  expect(pokemonForm.sprites).to.satisfy(isPokemonFormSprites);
  expect(pokemonForm.version_group).to.satisfy(isNamedAPIResource);
  expect(pokemonForm.names).to.satisfy(isNameArray);
  expect(pokemonForm.form_names).to.satisfy(isNameArray);
}
