import { INamedPokeAPIResource } from '../../types';
import { IAPIResource, IName, INamedAPIResource } from '../utility';

/**
 * Stats determine certain aspects of battles. Each Pokémon has a value for each stat which grows as they gain levels and can be altered momentarily by
 * effects in battles.
 */
export interface IStat extends INamedPokeAPIResource {
  /**
   * A detail of moves which affect this stat positively or negatively.
   */
  affecting_moves: IMoveStatAffectSets;

  /**
   * A detail of natures which affect this stat positively or negatively.
   */
  affecting_natures: INatureStatAffectSets;

  /**
   * A list of characteristics that are set on a Pokémon when its highest base stat is this stat.
   */
  characteristics: IAPIResource;

  /**
   * ID the games use for this stat.
   */
  game_index: number;

  /**
   * Whether this stat only exists within a battle.
   */
  is_battle_only: boolean;

  /**
   * The class of damage this stat is directly related to.
   */
  move_damage_class: INamedAPIResource | null;

  /**
   * The name of this resource listed in different languages.
   */
  names: IName[];
}

export interface IMoveStatAffectSets {
  /**
   * A list of moves and how they change the referenced stat.
   */
  decrease: IMoveStatAffect[];

  /**
   * A list of moves and how they change the referenced stat.
   */
  increase: IMoveStatAffect[];
}

export interface IMoveStatAffect {
  /**
   * The maximum amount of change to the referenced stat.
   */
  change: number;

  /**
   * The move causing the change.
   */
  move: INamedAPIResource;
}

export interface INatureStatAffectSets {
  /**
   * A list of natures and how they change the referenced stat.
   */
  decrease: INamedAPIResource[];

  /**
   * A list of natures and how they change the referenced stat.
   */
  increase: INamedAPIResource[];
}
