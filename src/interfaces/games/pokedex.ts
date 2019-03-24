import { INamedPokeAPIResource } from '../../types';
import { IDescription, IName, INamedAPIResource } from '../utility';

/**
 * A Pokédex is a handheld electronic encyclopedia device; one which is capable of recording and retaining information of the various Pokémon in a given region
 * with the exception of the national dex and some smaller dexes related to portions of a region.
 * See [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Pokedex) for greater detail.
 */
export interface IPokedex extends INamedPokeAPIResource {
  /**
   * The description of this resource listed in different languages.
   */
  descriptions: IDescription[];

  /**
   * Whether or not this Pokédex originated in the main series of the video games.
   */
  is_main_series: boolean;

  /**
   * The name of this resource listed in different languages.
   */
  names: IName[];

  /**
   * A list of Pokémon catalogued in this Pokédex and their indexes.
   */
  pokemon_entries: IPokemonEntry[];

  /**
   * The region this Pokédex catalogues Pokémon for.
   */
  region: INamedAPIResource | null;

  /**
   * A list of version groups this Pokédex is relevant to.
   */
  version_groups: INamedAPIResource[];
}

export interface IPokemonEntry {
  /**
   * The index of this Pokémon species entry within the Pokédex.
   */
  entry_number: number;

  /**
   * The Pokémon species being encountered.
   */
  pokemon_species: INamedAPIResource;
}
