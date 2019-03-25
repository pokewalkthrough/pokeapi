import { expect } from 'chai';

import { IPokemonSpecies } from '../../../src/interfaces';
import {
  isAPIResource,
  isDescriptionArray,
  isFlavorTextArray,
  isGenusArray,
  isNameArray,
  isNamedAPIResource,
  isNamedAPIResourceArray,
  isNamedAPIResourceOrNull,
  isPalParkEncounterAreaArray,
  isPokemonSpeciesDexEntryArray,
  isPokemonSpeciesVarietyArray,
} from '../type-guards';

export function pokemonSpeciesTests(pokemonSpecies: IPokemonSpecies): void {
  expect(pokemonSpecies.order).to.be.a('number');
  expect(pokemonSpecies.gender_rate).to.be.a('number');
  expect(pokemonSpecies.capture_rate).to.be.a('number');
  expect(pokemonSpecies.base_happiness).to.be.a('number');
  expect(pokemonSpecies.is_baby).to.be.a('boolean');
  expect(pokemonSpecies.hatch_counter).to.be.a('number');
  expect(pokemonSpecies.has_gender_differences).to.be.a('boolean');
  expect(pokemonSpecies.forms_switchable).to.be.a('boolean');
  expect(pokemonSpecies.growth_rate).to.satisfy(isNamedAPIResource);
  expect(pokemonSpecies.pokedex_numbers).to.satisfy(isPokemonSpeciesDexEntryArray);
  expect(pokemonSpecies.egg_groups).to.satisfy(isNamedAPIResourceArray);
  expect(pokemonSpecies.color).to.satisfy(isNamedAPIResource);
  expect(pokemonSpecies.shape).to.satisfy(isNamedAPIResource);
  expect(pokemonSpecies.evolves_from_species).to.satisfy(isNamedAPIResourceOrNull);
  expect(pokemonSpecies.evolution_chain).to.satisfy(isAPIResource);
  expect(pokemonSpecies.habitat).to.satisfy(isNamedAPIResourceOrNull);
  expect(pokemonSpecies.generation).to.satisfy(isNamedAPIResource);
  expect(pokemonSpecies.names).to.satisfy(isNameArray);
  expect(pokemonSpecies.pal_park_encounters).to.satisfy(isPalParkEncounterAreaArray);
  expect(pokemonSpecies.flavor_text_entries).to.satisfy(isFlavorTextArray);
  expect(pokemonSpecies.form_descriptions).to.satisfy(isDescriptionArray);
  expect(pokemonSpecies.genera).to.satisfy(isGenusArray);
  expect(pokemonSpecies.varieties).to.satisfy(isPokemonSpeciesVarietyArray);
}
