import { INamedPokeAPIResource } from '../../types';
import { IName, INamedAPIResource } from '../utility';

/**
 * Colors used for sorting Pokémon in a Pokédex. The color listed in the Pokédex is usually the color most apparent or covering each Pokémon's body. No orange
 * category exists; Pokémon that are primarily orange are listed as red or brown.
 */
export interface IPokemonColor extends INamedPokeAPIResource {
  /**
   * The name of this resource listed in different languages.
   */
  names: IName[];

  /**
   * A list of the Pokémon species that have this color.
   */
  pokemon_species: INamedAPIResource[];
}
