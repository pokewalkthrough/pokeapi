import { IName, INamedAPIResource, IVersionEncounterDetail } from '../utility';
import { INamedPokeAPIResource } from '..';

/**
 * Location areas are sections of areas, such as floors in a building or cave. Each area has its own set of possible Pokémon encounters.
 */
export interface ILocationArea extends INamedPokeAPIResource {
  /**
   * A list of methods in which Pokémon may be encountered in this area and how likely the method will occur depending on the version of the game.
   */
  encounter_method_rates: IEncounterMethodRate[];

  /**
   * The internal id of an API resource within game data.
   */
  game_index: number;

  /**
   * The region this location area can be found in.
   */
  location: INamedAPIResource;

  /**
   * The name of this resource listed in different languages.
   */
  names: IName[];

  /**
   * A list of Pokémon that can be encountered in this area along with version specific details about the encounter.
   */
  pokemon_encounters: IPokemonEncounter[];
}

export interface IEncounterMethodRate {
  /**
   * The method in which Pokémon may be encountered in an area.
   */
  encounter_method: INamedAPIResource;

  /**
   * The chance of the encounter to occur on a version of the game.
   */
  version_details: IEncounterVersionDetails[];
}

export interface IEncounterVersionDetails {
  /**
   * The chance of an encounter to occur.
   */
  rate: number;

  /**
   * The version of the game in which the encounter can occur with the given chance.
   */
  version: INamedAPIResource;
}

export interface IPokemonEncounter {
  /**
   * The Pokémon being encountered.
   */
  pokemon: INamedAPIResource;

  /**
   * A list of versions and encounters with Pokémon that might happen in the referenced location area.
   */
  version_details: IVersionEncounterDetail[];
}
