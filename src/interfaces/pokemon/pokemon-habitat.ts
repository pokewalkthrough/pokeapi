import { IName, INamedAPIResource } from '../utility';
import { INamedPokeAPIResource } from '..';

/**
 * Habitats are generally different terrain Pokémon can be found in but can also be areas designated for rare or legendary Pokémon.
 */
export interface IPokemonHabitat extends INamedPokeAPIResource {
  /**
   * The name of this resource listed in different languages.
   */
  names: IName[];

  /**
   * A list of the Pokémon species that can be found in this habitat.
   */
  pokemon_species: INamedAPIResource[];
}
