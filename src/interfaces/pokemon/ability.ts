import { IEffect, IName, INamedAPIResource, IVerboseEffect } from '../utility';
import { INamedPokeAPIResource } from '..';

/**
 * Abilities provide passive effects for Pokémon in battle or in the overworld. Pokémon have multiple possible abilities but can have only one ability at a
 * time. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Ability) for greater detail.
 */
export interface IAbility extends INamedPokeAPIResource {
  /**
   * The list of previous effects this ability has had across version groups.
   */
  effect_changes: IAbilityEffectChange[];

  /**
   * The effect of this ability listed in different languages.
   */
  effect_entries: IVerboseEffect[];

  /**
   * The flavor text of this ability listed in different languages.
   */
  flavor_text_entries: IAbilityFlavorText[];

  /**
   * The generation this ability originated in.
   */
  generation: INamedAPIResource;

  /**
   * Whether or not this ability originated in the main series of the video games.
   */
  is_main_series: boolean;

  /**
   * The name of this resource listed in different languages.
   */
  names: IName[];

  /**
   * A list of Pokémon that could potentially have this ability.
   */
  pokemon: IAbilityPokemon[];
}

export interface IAbilityEffectChange {
  /**
   * The previous effect of this ability listed in different languages.
   */
  effect_entries: IEffect[];

  /**
   * The version group in which the previous effect of this ability originated.
   */
  version_group: INamedAPIResource;
}

export interface IAbilityFlavorText {
  /**
   * The localized name for an API resource in a specific language.
   */
  flavor_text: string;

  /**
   * The language this text resource is in.
   */
  language: INamedAPIResource;

  /**
   * The version group that uses this flavor text.
   */
  version_group: INamedAPIResource;
}

export interface IAbilityPokemon {
  /**
   * Whether or not this a hidden ability for the referenced Pokémon.
   */
  is_hidden: boolean;

  /**
   * The Pokémon this ability could belong to.
   */
  pokemon: INamedAPIResource;

  /**
   * Pokémon have 3 ability 'slots' which hold references to possible abilities they could have. This is the slot of this ability for the referenced pokemon.
   */
  slot: number;
}
