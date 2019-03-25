import { INamedPokeAPIResource } from '../../types';
import { IName, INamedAPIResource } from '../utility';

/**
 * Move Ailments are status conditions caused by moves used during battle.
 * See [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/http://bulbapedia.bulbagarden.net/wiki/Status_condition) for greater detail.
 */
export interface IMoveAilment extends INamedPokeAPIResource {
  /**
   * A list of moves that cause this ailment.
   */
  moves: INamedAPIResource[];

  /**
   * The name of this resource listed in different languages.
   */
  names: IName[];
}
