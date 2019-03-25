import { expect } from 'chai';

import { IAbility } from '../../../src/interfaces';
import {
  isAbilityEffectChangeArray,
  isAbilityFlavorTextArray,
  isAbilityPokemonArray,
  isNameArray,
  isNamedAPIResource,
  isVerboseEffectArray,
} from '../type-guards';

export function abilityTests(ability: IAbility): void {
  expect(ability.is_main_series).to.be.a('boolean');
  expect(ability.generation).to.satisfy(isNamedAPIResource);
  expect(ability.names).to.satisfy(isNameArray);
  expect(ability.effect_entries).to.satisfy(isVerboseEffectArray);
  expect(ability.effect_changes).to.satisfy(isAbilityEffectChangeArray);
  expect(ability.flavor_text_entries).to.satisfy(isAbilityFlavorTextArray);
  expect(ability.pokemon).to.satisfy(isAbilityPokemonArray);
}
