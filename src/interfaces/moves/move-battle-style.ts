import { IName } from '../utility';
import { INamedPokeAPIResource } from '..';

/**
 * Styles of moves when used in the Battle Palace. See [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Battle_Frontier_(Generation_III)) for greater
 * detail.
 */
export interface IMoveBattleStyle extends INamedPokeAPIResource {
  /**
   * The name of this resource listed in different languages.
   */
  names: IName[];
}
