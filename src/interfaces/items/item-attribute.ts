import { IDescription, IName, INamedAPIResource } from '../utility';
import { INamedPokeAPIResource } from '..';

/**
 * Item attributes define particular aspects of items, e.g. "usable in battle" or "consumable".
 */
export interface IItemAttribute extends INamedPokeAPIResource {
  /**
   * The description of this item attribute listed in different languages.
   */
  descriptions: IDescription[];

  /**
   * A list of items that have this attribute.
   */
  items: INamedAPIResource[];

  /**
   * The name of this item attribute listed in different languages.
   */
  names: IName[];
}
