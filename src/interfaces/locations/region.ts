import { INamedPokeAPIResource } from '../../types';
import { IName, INamedAPIResource } from '../utility';

/**
 * A region is an organized area of the Pokémon world. Most often, the main difference between regions is the species of Pokémon that can be encountered within
 * them.
 */
export interface IRegion extends INamedPokeAPIResource {
  /**
   * A list of locations that can be found in this region.
   */
  locations: INamedAPIResource[];

  /**
   * The generation this region was introduced in.
   */
  main_generation: INamedAPIResource;

  /**
   * The name of this resource listed in different languages.
   */
  names: IName[];

  /**
   * A list of pokédexes that catalogue Pokémon in this region.
   */
  pokedexes: INamedAPIResource[];

  /**
   * A list of version groups where this region can be visited.
   */
  version_groups: INamedAPIResource[];
}
