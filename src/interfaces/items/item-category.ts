import { IName, INamedAPIResource, INamedPokeAPIResource } from '../../types';

/**
 * Item categories determine where items will be placed in the players bag.
 */
export interface IItemCategory extends INamedPokeAPIResource {
  /**
   * A list of items that are a part of this category.
   */
  items: INamedAPIResource[];

  /**
   * The name of this item category listed in different languages.
   */
  names: IName[];

  /**
   * The pocket items in this category would be put in.
   */
  pocket: INamedAPIResource;
}
