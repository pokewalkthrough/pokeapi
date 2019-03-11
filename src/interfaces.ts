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

// Contest Effects
export interface IContestEffect extends IPokeAPIResource {
  appeal: number;
  effect_entries: IEffect[];
  flavor_text_entries: IFlavorText[];
  jam: number;
}

// Super Contest Effects
export interface ISuperContestEffect extends IPokeAPIResource {
  appeal: number;
  flavor_text_entries: IFlavorText[];
  moves: INamedAPIResource[]; // Move
}

// Encounter Methods
export interface IEncounterMethod extends INamedPokeAPIResource {
  names: IName[];
  order: number;
}

// Encounter Conditions
export interface IEncounterCondition extends INamedPokeAPIResource {
  names: IName[];
  values: INamedAPIResource[]; // EncounterConditionValue
}

// Encounter Condition Values
export interface IEncounterConditionValue extends INamedPokeAPIResource {
  condition: INamedAPIResource; // EncounterCondition
  names: IName[];
}

// Evolution Chains
export interface IEvolutionChain extends IPokeAPIResource {
  baby_trigger_item: INamedAPIResource | null; // Item
  chain: IChainLink;
}

export interface IChainLink {
  evolution_details: IEvolutionDetail[];
  evolves_to: IChainLink[];
  is_baby: boolean;
  species: INamedAPIResource; // PokemonSpecies
}

export interface IEvolutionDetail {
  gender: number | null;
  held_item: INamedAPIResource | null; // Item
  item: INamedAPIResource | null; // Item
  known_move: INamedAPIResource | null; // Move
  known_move_type: INamedAPIResource | null; // Type
  location: INamedAPIResource | null; // Location
  min_affection: number | null;
  min_beauty: number | null;
  min_happiness: number | null;
  min_level: number | null;
  needs_overworld_rain: boolean | null;
  party_species: INamedAPIResource | null; // PokemonSpecies
  party_type: INamedAPIResource | null; // Type
  relative_physical_stats: number | null;
  time_of_day: string;
  trade_species: INamedAPIResource | null; // PokemonSpecies
  trigger: INamedAPIResource; // EvolutionTrigger
  turn_upside_down: boolean | null;
}

// Evolution Triggers
export interface IEvolutionTrigger extends INamedPokeAPIResource {
  names: IName[];
  pokemon_species: INamedAPIResource[];
}

// Utility - Common Models
export interface IAPIResource {
  url: string;
}

export interface IEffect {
  effect: string;
  language: INamedAPIResource; // Language
}

export interface IFlavorText {
  flavor_text: string;
  language: INamedAPIResource; // Language
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
