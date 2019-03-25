import { IName, INamedAPIResource } from '../utility';
import { INamedPokeAPIResource } from '..';

/**
 * A generation is a grouping of the Pokémon games that separates them based on the Pokémon they include. In each generation, a new set of Pokémon, Moves,
 * Abilities and Types that did not exist in the previous generation are released.
 */
export interface IGeneration extends INamedPokeAPIResource {
  /**
   * A list of abilities that were introduced in this generation.
   */
  abilities: INamedAPIResource[];

  /**
   * The main region travelled in this generation.
   */
  main_region: INamedAPIResource;

  /**
   * A list of moves that were introduced in this generation.
   */
  moves: INamedAPIResource[];

  /**
   * The name of this resource listed in different languages.
   */
  names: IName[];

  /**
   * A list of Pokémon species that were introduced in this generation.
   */
  pokemon_species: INamedAPIResource[];

  /**
   * A list of types that were introduced in this generation.
   */
  types: INamedAPIResource[];

  /**
   * A list of version groups that were introduced in this generation.
   */
  version_groups: INamedAPIResource[];
}
