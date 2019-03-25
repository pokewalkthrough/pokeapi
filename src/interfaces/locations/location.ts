import { IGenerationGameIndex, IName, INamedAPIResource } from '../utility';
import { INamedPokeAPIResource } from '..';

/**
 * Locations that can be visited within the games. Locations make up sizable portions of regions, like cities or routes.
 */
export interface ILocation extends INamedPokeAPIResource {
  /**
   * Areas that can be found within this location.
   */
  areas: INamedAPIResource[];

  /**
   * A list of game indices relevent to this location by generation.
   */
  game_indices: IGenerationGameIndex[];

  /**
   * The name of this resource listed in different languages.
   */
  names: IName[];

  /**
   * The region this location can be found in.
   */
  region: INamedAPIResource | null;
}
