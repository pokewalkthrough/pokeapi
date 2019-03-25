import { IDescription, INamedAPIResource } from '../utility';
import { INamedPokeAPIResource } from '..';

/**
 * Very general categories that loosely group move effects.
 */
export interface IMoveCategory extends INamedPokeAPIResource {
  /**
   * The description of this resource listed in different languages.
   */
  descriptions: IDescription[];

  /**
   * A list of moves that fall into this category.
   */
  moves: INamedAPIResource[];
}
