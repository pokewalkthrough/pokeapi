import { IDescription, IName, INamedAPIResource } from '../utility';
import { INamedPokeAPIResource } from '..';

/**
 * Damage classes moves can have, e.g. physical, special, or non-damaging.
 */
export interface IMoveDamageClass extends INamedPokeAPIResource {
  /**
   * The description of this resource listed in different languages.
   */
  descriptions: IDescription[];

  /**
   * A list of moves that fall into this damage class.
   */
  moves: INamedAPIResource[];

  /**
   * The name of this resource listed in different languages.
   */
  names: IName[];
}
