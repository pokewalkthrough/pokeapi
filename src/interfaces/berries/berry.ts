import { INamedAPIResource, INamedPokeAPIResource } from '../../types';

export interface IBerry extends INamedPokeAPIResource {
  firmness: INamedAPIResource; // BerryFirmness
  flavors: IBerryFlavorMap[];
  growth_time: number;
  item: INamedAPIResource; // Item
  max_harvest: number;
  natural_gift_power: number;
  natural_gift_type: INamedAPIResource; // Type
  size: number;
  smoothness: number;
  soil_dryness: number;
}

export interface IBerryFlavorMap {
  flavor: INamedAPIResource; // BerryFlavor
  potency: number;
}
