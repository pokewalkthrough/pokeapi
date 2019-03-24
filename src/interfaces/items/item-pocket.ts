import { INamedPokeAPIResource } from '../../types';
import { IName, INamedAPIResource } from '../utility';

export interface IItemPocket extends INamedPokeAPIResource {
  categories: INamedAPIResource[];
  names: IName[];
}
