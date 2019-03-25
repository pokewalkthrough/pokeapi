import { IName, INamedAPIResource } from '../utility';
import { INamedPokeAPIResource } from '..';

/**
 * Pokeathlon Stats are different attributes of a Pokémon's performance in Pokéathlons. In Pokéathlons, competitions happen on different courses; one for each
 * of the different Pokéathlon stats. See [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9athlon) for greater detail.
 */
export interface IPokeathlonStat extends INamedPokeAPIResource {
  /**
   * A detail of natures which affect this Pokéathlon stat positively or negatively.
   */
  affecting_natures: INaturePokeathlonStatAffectSets;

  /**
   * The name of this resource listed in different languages.
   */
  names: IName[];
}

export interface INaturePokeathlonStatAffectSets {
  /**
   * A list of natures and how they change the referenced Pokéathlon stat.
   */
  decrease: INaturePokeathlonStatAffect[];

  /**
   * A list of natures and how they change the referenced Pokéathlon stat.
   */
  increase: INaturePokeathlonStatAffect[];
}

export interface INaturePokeathlonStatAffect {
  /**
   * The maximum amount of change to the referenced Pokéathlon stat.
   */
  max_change: number;

  /**
   * The nature causing the change.
   */
  nature: INamedAPIResource;
}
