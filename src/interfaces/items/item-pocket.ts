import { IName, INamedAPIResource } from '../utility';
import { INamedPokeAPIResource } from '..';

export interface IItemPocket extends INamedPokeAPIResource {
  categories: INamedAPIResource[];
  names: IName[];
}
