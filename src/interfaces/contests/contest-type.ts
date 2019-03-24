import { INamedPokeAPIResource } from '../../types';
import { INamedAPIResource } from '../utility';

/**
 * Contest types are categories judges used to weigh a Pokémon's condition in Pokémon contests. Check out
 * [Bulbapedia](https://bulbapedia.bulbagarden.net/wiki/Contest_condition) for greater detail.
 */
export interface IContestType extends INamedPokeAPIResource {
  /**
   * The berry flavor that correlates with this contest type.
   */
  berry_flavor: INamedAPIResource;

  /**
   * The name of this contest type listed in different languages.
   */
  names: IContestName[];
}

export interface IContestName {
  /**
   * The color associated with this contest's name.
   */
  color: string;

  /**
   * The language that this name is in.
   */
  language: INamedAPIResource;

  /**
   * The name for this contest.
   */
  name: string;
}
