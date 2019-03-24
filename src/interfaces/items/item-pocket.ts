import { IName, INamedAPIResource, INamedPokeAPIResource } from '../../types';

export interface IItemPocket extends INamedPokeAPIResource {
  categories: INamedAPIResource[]; // ItemCategory
  names: IName[];
}
