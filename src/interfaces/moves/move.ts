import { IAbilityEffectChange, INamedPokeAPIResource } from '../../types';
import { IAPIResource, IMachineVersionDetail, IName, INamedAPIResource, IVerboseEffect } from '../utility';

/**
 * Moves are the skills of Pokémon in battle. In battle, a Pokémon uses one move each turn. Some moves (including those learned by Hidden Machine) can be used
 * outside of battle as well, usually for the purpose of removing obstacles or exploring new areas.
 */
export interface IMove extends INamedPokeAPIResource {
  /**
   * The percent value of how likely this move is to be successful.
   */
  accuracy: number | null;

  /**
   * A detail of normal and super contest combos that require this move.
   */
  contest_combos: IContestComboSets | null;

  /**
   * The effect the move has when used in a contest.
   */
  contest_effect: IAPIResource;

  /**
   * The type of appeal this move gives a Pokémon when used in a contest.
   */
  contest_type: INamedAPIResource;

  /**
   * The type of damage the move inflicts on the target, e.g. physical.
   */
  damage_class: INamedAPIResource;

  /**
   * The percent value of how likely it is this moves effect will happen.
   */
  effect_chance: number | null;

  /**
   * The list of previous effects this move has had across version groups of the games.
   */
  effect_changes: IAbilityEffectChange[];

  /**
   * The effect of this move listed in different languages.
   */
  effect_entries: IVerboseEffect[];

  /**
   * The flavor text of this move listed in different languages.
   */
  flavor_text_entries: IMoveFlavorText[];

  /**
   * The generation in which this move was introduced.
   */
  generation: INamedAPIResource;

  /**
   * A list of the machines that teach this move.
   */
  machines: IMachineVersionDetail[];

  /**
   * Metadata about this move
   */
  meta: IMoveMetaData | null;

  /**
   * The name of this resource listed in different languages.
   */
  names: IName[];

  /**
   * A list of move resource value changes across version groups of the game.
   */
  past_values: IPastMoveStatValues[];

  /**
   * The base power of this move with a value of 0 if it does not have a base power.
   */
  power: number | null;

  /**
   * Power points. The number of times this move can be used.
   */
  pp: number | null;

  /**
   * A value between -8 and 8. Sets the order in which moves are executed during battle.
   * See [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Priority) for greater detail.
   */
  priority: number;

  /**
   * A list of stats this moves effects and how much it effects them.
   */
  stat_changes: IMoveStatChange[];

  /**
   * The effect the move has when used in a super contest.
   */
  super_contest_effect: IAPIResource | null;

  /**
   * The type of target that will receive the effects of the attack.
   */
  target: INamedAPIResource;

  /**
   * The elemental type of this move.
   */
  type: INamedAPIResource;
}

export interface IContestComboSets {
  /**
   * A detail of moves this move can be used before or after, granting additional appeal points in contests.
   */
  normal: IContestComboDetail;

  /**
   * A detail of moves this move can be used before or after, granting additional appeal points in super contests.
   */
  super: IContestComboDetail;
}

export interface IContestComboDetail {
  /**
   * A list of moves to use after this move.
   */
  use_after: INamedAPIResource[] | null;

  /**
   * A list of moves to use before this move.
   */
  use_before: INamedAPIResource[] | null;
}

export interface IMoveFlavorText {
  /**
   * The localized flavor text for an api resource in a specific language.
   */
  flavor_text: string;

  /**
   * The language this name is in.
   */
  language: INamedAPIResource;

  /**
   * The version group that uses this flavor text.
   */
  version_group: INamedAPIResource;
}

export interface IMoveMetaData {
  /**
   * The status ailment this move inflicts on its target.
   */
  ailment: INamedAPIResource;

  /**
   * The likelihood this attack will cause an ailment.
   */
  ailment_chance: number;

  /**
   * The category of move this move falls under, e.g. damage or ailment.
   */
  category: INamedAPIResource;

  /**
   * Critical hit rate bonus.
   */
  crit_rate: number;

  /**
   * HP drain (if positive) or Recoil damage (if negative), in percent of damage done.
   */
  drain: number;

  /**
   * The likelihood this attack will cause the target Pokémon to flinch.
   */
  flinch_chance: number;

  /**
   * The amount of hp gained by the attacking Pokemon, in percent of it's maximum HP.
   */
  healing: number;

  /**
   * The maximum number of times this move hits. Null if it always only hits once.
   */
  max_hits: number | null;

  /**
   * The maximum number of turns this move continues to take effect. Null if it always only lasts one turn.
   */
  max_turns: number | null;

  /**
   * The minimum number of times this move hits. Null if it always only hits once.
   */
  min_hits: number | null;

  /**
   * The minimum number of turns this move continues to take effect. Null if it always only lasts one turn.
   */
  min_turns: number | null;

  /**
   * The likelihood this attack will cause a stat change in the target Pokémon.
   */
  stat_chance: number;
}

export interface IMoveStatChange {
  /**
   * The amount of change.
   */
  change: number;

  /**
   * The stat being affected.
   */
  stat: INamedAPIResource;
}

export interface IPastMoveStatValues {
  /**
   * The percent value of how likely this move is to be successful.
   */
  accuracy: number | null;

  /**
   * The percent value of how likely it is this moves effect will take effect.
   */
  effect_chance: number | null;

  /**
   * The effect of this move listed in different languages.
   */
  effect_entries: IVerboseEffect[];

  /**
   * The base power of this move with a value of 0 if it does not have a base power.
   */
  power: number;

  /**
   * Power points. The number of times this move can be used.
   */
  pp: number | null;

  /**
   * The elemental type of this move.
   */
  type: INamedAPIResource | null;

  /**
   * The version group in which these move stat values were in effect.
   */
  version_group: INamedAPIResource;
}
