import { IName, INamedAPIResource } from '../utility';
import { INamedPokeAPIResource } from '..';

/**
 * Natures influence how a Pokémon's stats grow. See [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Nature) for greater detail.
 */
export interface INature extends INamedPokeAPIResource {
  /**
   * The stat decreased by 10% in Pokémon with this nature.
   */
  decreased_stat: INamedAPIResource | null;

  /**
   * The flavor hated by Pokémon with this nature.
   */
  hates_flavor: INamedAPIResource | null;

  /**
   * The stat increased by 10% in Pokémon with this nature.
   */
  increased_stat: INamedAPIResource | null;

  /**
   * The flavor liked by Pokémon with this nature.
   */
  likes_flavor: INamedAPIResource | null;

  /**
   * A list of battle styles and how likely a Pokémon with this nature is to use them in the Battle Palace or Battle Tent.
   */
  move_battle_style_preferences: IMoveBattleStylePreference[];

  /**
   * The name of this resource listed in different languages.
   */
  names: IName[];

  /**
   * A list of Pokéathlon stats this nature effects and how much it effects them.
   */
  pokeathlon_stat_changes: INatureStatChange[];
}

export interface INatureStatChange {
  /**
   * The amount of change.
   */
  max_change: number;

  /**
   * The stat being affected.
   */
  pokeathlon_stat: INamedAPIResource;
}

export interface IMoveBattleStylePreference {
  /**
   * Chance of using the move, in percent, if HP is over one half.
   */
  high_hp_preference: number;

  /**
   * Chance of using the move, in percent, if HP is under one half.
   */
  low_hp_preference: number;

  /**
   * The move battle style.
   */
  move_battle_style: INamedAPIResource;
}
