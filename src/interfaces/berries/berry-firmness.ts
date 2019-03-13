import { IName, INamedAPIResource, INamedPokeAPIResource } from '../../types';

export interface IBerryFirmness extends INamedPokeAPIResource {
  berries: INamedAPIResource[]; // Berry
  names: IName[];
}
