import { IName, INamedAPIResource, INamedPokeAPIResource } from '../../types';

export interface IBerryFlavor extends INamedPokeAPIResource {
  berries: IFlavorBerryMap[];
  contest_type: INamedAPIResource; // ContestType
  names: IName[];
}

export interface IFlavorBerryMap {
  berry: INamedAPIResource; // Berry
  potency: number;
}
