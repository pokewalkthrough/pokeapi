import { INamedPokeAPIResource } from '../../types';
import { IName, INamedAPIResource } from '../utility';

/**
 * Areas used for grouping Pokémon encounters in Pal Park. They're like habitats that are specific to
 * [Pal Park](https://bulbapedia.bulbagarden.net/wiki/Pal_Park).
 */
export interface IPalParkArea extends INamedPokeAPIResource {
  /**
   * The name of this resource listed in different languages.
   */
  names: IName[];

  /**
   * A list of Pokémon encountered in thi pal park area along with details.
   */
  pokemon_encounters: IPalParkEncounterSpecies[];
}

export interface IPalParkEncounterSpecies {
  /**
   * The base score given to the player when this Pokémon is caught during a pal park run.
   */
  base_score: number;

  /**
   * The Pokémon species being encountered.
   */
  pokemon_species: INamedAPIResource;

  /**
   * The base rate for encountering this Pokémon in this pal park area.
   */
  rate: number;
}
