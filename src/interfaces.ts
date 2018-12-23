// Resource Lists
export interface IAPIResourceList {
  count: number;
  next: string | null;
  previous: string | null;
  results: IAPIResource[];
}

export interface INamedAPIResourceList {
  count: number;
  next: string | null;
  previous: string | null;
  results: INamedAPIResource[];
}

// Berries
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

// Berry Firmnesses
export interface IBerryFirmness extends INamedPokeAPIResource {
  berries: INamedAPIResource[]; // Berry
  names: IName[];
}

// Berry Flavors
export interface IBerryFlavor extends INamedPokeAPIResource {
  berries: IFlavorBerryMap[];
  contest_type: INamedAPIResource; // ContestType
  names: IName[];
}

export interface IFlavorBerryMap {
  berry: INamedAPIResource; // Berry
  potency: number;
}

// Contest Types
export interface IContestType extends INamedPokeAPIResource {
  berry_flavor: INamedAPIResource; // BerryFlavor
  names: IContestName[];
}

export interface IContestName {
  color: string;
  language: INamedAPIResource; // Language
  name: string;
}

// Utility
export interface IAPIResource {
  url: string;
}

export interface IName {
  language: INamedAPIResource; // Language
  name: string;
}

export interface INamedAPIResource extends IAPIResource {
  name: string;
}

// Additional Interfaces
export interface IPokeAPIResource {
  id: number;
}

export interface INamedPokeAPIResource {
  id: number;
  name: string;
}

// Additional Types
export type TPokeAPIEndpoint =
  | 'berry'
  | 'berry-firmness'
  | 'berry-flavor'
  | 'contest-type'
  | 'contest-effect'
  | 'super-contest-effect'
  | 'encounter-method'
  | 'encounter-condition'
  | 'encounter-condition-value'
  | 'evolution-chain'
  | 'evolution-trigger'
  | 'generation'
  | 'pokedex'
  | 'version'
  | 'version-group'
  | 'item'
  | 'item-attribute'
  | 'item-category'
  | 'item-fling-effect'
  | 'item-pocket'
  | 'location'
  | 'location-area'
  | 'pal-park-area'
  | 'region'
  | 'machine'
  | 'move'
  | 'move-ailment'
  | 'move-battle-style'
  | 'move-category'
  | 'move-damage-class'
  | 'move-learn-method'
  | 'move-target'
  | 'ability'
  | 'characteristic'
  | 'egg-group'
  | 'gender'
  | 'growth-rate'
  | 'nature'
  | 'pokeathlon-stat'
  | 'pokemon'
  | 'pokemon-color'
  | 'pokemon-form'
  | 'pokemon-habitat'
  | 'pokemon-shape'
  | 'pokemon-species'
  | 'stat'
  | 'type';
