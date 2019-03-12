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
  needs_overworld_rain: boolean;
  party_species: INamedAPIResource | null; // PokemonSpecies
  party_type: INamedAPIResource | null; // Type
  relative_physical_stats: number | null;
  time_of_day: string;
  trade_species: INamedAPIResource | null; // PokemonSpecies
  trigger: INamedAPIResource; // EvolutionTrigger
  turn_upside_down: boolean;
}

// Evolution Triggers
export interface IEvolutionTrigger extends INamedPokeAPIResource {
  names: IName[];
  pokemon_species: INamedAPIResource[];
}

// Generations
export interface IGeneration extends INamedPokeAPIResource {
  abilities: INamedAPIResource[]; // Ability
  main_region: INamedAPIResource; // Region
  moves: INamedAPIResource[]; // Move
  names: IName[];
  pokemon_species: INamedAPIResource[]; // PokemonSpecies
  types: INamedAPIResource[]; // Type
  version_groups: INamedAPIResource[]; // VersionGroup
}

// Pokedexes
export interface IPokedex extends INamedPokeAPIResource {
  descriptions: IDescription[];
  is_main_series: boolean;
  names: IName[];
  pokemon_entries: IPokemonEntry[];
  region: INamedAPIResource | null; // Region
  version_groups: INamedAPIResource[]; // VersionGroup
}

export interface IPokemonEntry {
  entry_number: number;
  pokemon_species: INamedAPIResource; // PokemonSpecies
}

// Versions
export interface IVersion extends INamedPokeAPIResource {
  names: IName[];
  version_group: INamedAPIResource; // VersionGroup
}

// Version Groups
export interface IVersionGroup extends INamedPokeAPIResource {
  generation: INamedAPIResource; // Generation
  move_learn_methods: INamedAPIResource[]; // MoveLearnMethod
  order: number;
  pokedexes: INamedAPIResource[]; // Pokedex
  regions: INamedAPIResource[]; // Region
  versions: INamedAPIResource[]; // Version
}

// Items
export interface IItem extends INamedPokeAPIResource {
  attributes: INamedAPIResource[]; // ItemAttribute
  baby_trigger_for: IAPIResource | null; // EvolutionChain
  category: INamedAPIResource; // ItemCategory
  cost: number;
  effect_entries: IVerboseEffect[];
  flavor_text_entries: IVersionGroupFlavorText[];
  fling_effect: INamedAPIResource | null; // ItemFlingEffect
  fling_power: number | null;
  game_indices: IGenerationGameIndex[];
  held_by_pokemon: IItemHolderPokemon[];
  machines: IMachineVersionDetail[];
  names: IName[];
  sprites: IItemSprites;
}

export interface IItemSprites {
  default: string | null;
}

export interface IItemHolderPokemon {
  pokemon: string;
  version_details: IItemHolderPokemonVersionDetail[];
}

export interface IItemHolderPokemonVersionDetail {
  rarity: string;
  version: INamedAPIResource; // Version
}

// Item Attributes
export interface IItemAttribute extends INamedPokeAPIResource {
  descriptions: IDescription[];
  items: INamedAPIResource[]; // Item
  names: IName[];
}

// Item Categories
export interface IItemCategory extends INamedPokeAPIResource {
  items: INamedAPIResource[]; // Item
  names: IName[];
  pocket: INamedAPIResource; // ItemPocket
}

// Item Fling Effects
export interface IItemFlingEffect extends INamedPokeAPIResource {
  effect_entries: IEffect[];
  items: INamedAPIResource[]; // Item
}

// Item Pockets
export interface IItemPocket extends INamedPokeAPIResource {
  categories: INamedAPIResource[]; // ItemCategory
  names: IName[];
}

// Locations
export interface ILocation extends INamedPokeAPIResource {
  areas: INamedAPIResource[]; // LocationArea
  game_indices: IGenerationGameIndex[];
  names: IName[];
  region: INamedAPIResource; // Region
}

// LocationArea
export interface ILocationArea extends INamedPokeAPIResource {
  encounter_method_rates: IEncounterMethodRate[];
  game_index: number;
  location: INamedAPIResource; // Location
  names: IName[];
  pokemon_encounters: IPokemonEncounter[];
}

export interface IEncounterMethodRate {
  encounter_method: INamedAPIResource; // EncounterMethod
  version_details: IEncounterVersionDetails[];
}

export interface IEncounterVersionDetails {
  rate: number;
  version: INamedAPIResource; // Version
}

export interface IPokemonEncounter {
  pokemon: INamedAPIResource; // Pokemon
  version_details: IVersionEncounterDetail[];
}

// PalParkArea
export interface IPalParkArea extends INamedPokeAPIResource {
  names: IName[];
  pokemon_encounters: IPalParkEncounterSpecies[];
}

export interface IPalParkEncounterSpecies {
  base_score: number;
  pokemon_species: INamedAPIResource; // PokemonSpecies
  rate: number;
}

// Region
export interface IRegion extends INamedPokeAPIResource {
  locations: INamedAPIResource[]; // Location
  main_generation: INamedAPIResource; // Generation
  names: IName[];
  pokedexes: INamedAPIResource[]; // Pokedex
  version_groups: INamedAPIResource[]; // VersionGroup
}

// Utility - Common Models
export interface IAPIResource {
  url: string;
}

export interface IDescription {
  description: string;
  language: INamedAPIResource; // Language
}

export interface IEffect {
  effect: string;
  language: INamedAPIResource; // Language
}

export interface IEncounter {
  chance: number;
  condition_values: INamedAPIResource[]; // EncounterConditionValue
  max_level: number;
  method: INamedAPIResource; // EncounterMethod
  min_level: number;
}

export interface IFlavorText {
  flavor_text: string;
  language: INamedAPIResource; // Language
}

export interface IGenerationGameIndex {
  game_index: number;
  generation: INamedAPIResource; // Generation
}

export interface IMachineVersionDetail {
  machine: IAPIResource; // Machine
  version_group: INamedAPIResource; // VersionGroup
}

export interface IName {
  language: INamedAPIResource; // Language
  name: string;
}

export interface INamedAPIResource extends IAPIResource {
  name: string;
}

export interface IVerboseEffect {
  effect: string;
  language: INamedAPIResource; // Language
  short_effect: string;
}

export interface IVersionEncounterDetail {
  encounter_details: IEncounter[];
  max_chance: number;
  version: INamedAPIResource; // Version
}

export interface IVersionGroupFlavorText {
  language: INamedAPIResource; // Language
  text: string;
  version_group: INamedAPIResource; // VersionGroup
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
