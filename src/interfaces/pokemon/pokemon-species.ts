import { IAPIResource, IDescription, IFlavorText, IName, INamedAPIResource } from '../utility';
import { INamedPokeAPIResource } from '..';

/**
 * A Pokémon Species forms the basis for at least one Pokémon. Attributes of a Pokémon species are shared across all varieties of Pokémon within the species.
 * A good example is Wormadam; Wormadam is the species which can be found in three different varieties, Wormadam-Trash, Wormadam-Sandy and Wormadam-Plant.
 */
export interface IPokemonSpecies extends INamedPokeAPIResource {
  /**
   * The happiness when caught by a normal Pokéball; up to 255. The higher the number, the happier the Pokémon.
   */
  base_happiness: number;

  /**
   * The base capture rate; up to 255. The higher the number, the easier the catch.
   */
  capture_rate: number;

  /**
   * The color of this Pokémon for Pokédex search.
   */
  color: INamedAPIResource;

  /**
   * A list of egg groups this Pokémon species is a member of.
   */
  egg_groups: INamedAPIResource[];

  /**
   * The evolution chain this Pokémon species is a member of.
   */
  evolution_chain: IAPIResource;

  /**
   * The Pokémon species that evolves into this Pokemon_species.
   */
  evolves_from_species: INamedAPIResource | null;

  /**
   * A list of flavor text entries for this Pokémon species.
   */
  flavor_text_entries: IFlavorText[];

  /**
   * Descriptions of different forms Pokémon take on within the Pokémon species.
   */
  form_descriptions: IDescription[];

  /**
   * Whether or not this Pokémon has multiple forms and can switch between them.
   */
  forms_switchable: boolean;

  /**
   * The chance of this Pokémon being female, in eighths; or -1 for genderless.
   */
  gender_rate: number;

  /**
   * The genus of this Pokémon species listed in multiple languages.
   */
  genera: IGenus[];

  /**
   * The generation this Pokémon species was introduced in.
   */
  generation: INamedAPIResource;

  /**
   * The rate at which this Pokémon species gains levels.
   */
  growth_rate: INamedAPIResource;

  /**
   * The habitat this Pokémon species can be encountered in.
   */
  habitat: INamedAPIResource | null;

  /**
   * Whether or not this Pokémon has visual gender differences.
   */
  has_gender_differences: boolean;

  /**
   * Initial hatch counter: one must walk 255 × (hatch_counter + 1) steps before this Pokémon's egg hatches, unless utilizing bonuses like Flame Body's.
   */
  hatch_counter: number;

  /**
   * Whether or not this is a baby Pokémon.
   */
  is_baby: boolean;

  /**
   * The name of this resource listed in different languages.
   */
  names: IName[];

  /**
   * The order in which species should be sorted. Based on National Dex order, except families are grouped together and sorted by stage.
   */
  order: number;

  /**
   * A list of encounters that can be had with this Pokémon species in pal park.
   */
  pal_park_encounters: IPalParkEncounterArea[];

  /**
   * A list of Pokedexes and the indexes reserved within them for this Pokémon species.
   */
  pokedex_numbers: IPokemonSpeciesDexEntry[];

  /**
   * The shape of this Pokémon for Pokédex search.
   */
  shape: INamedAPIResource;

  /**
   * A list of the Pokémon that exist within this Pokémon species.
   */
  varieties: IPokemonSpeciesVariety[];
}

export interface IGenus {
  /**
   * The localized genus for the referenced Pokémon species
   */
  genus: string;

  /**
   * The language this genus is in.
   */
  language: INamedAPIResource;
}

export interface IPokemonSpeciesDexEntry {
  /**
   * The index number within the Pokédex.
   */
  entry_number: number;

  /**
   * The Pokédex the referenced Pokémon species can be found in.
   */
  pokedex: INamedAPIResource;
}

export interface IPalParkEncounterArea {
  /**
   * The pal park area where this encounter happens.
   */
  area: INamedAPIResource;

  /**
   * The base score given to the player when the referenced Pokémon is caught during a pal park run.
   */
  base_score: number;

  /**
   * The base rate for encountering the referenced Pokémon in this pal park area.
   */
  rate: number;
}

export interface IPokemonSpeciesVariety {
  /**
   * Whether this variety is the default variety.
   */
  is_default: boolean;

  /**
   * The Pokémon variety.
   */
  pokemon: INamedAPIResource;
}
