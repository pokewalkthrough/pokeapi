import { INamedPokeAPIResource } from '../../types';
import { IName, INamedAPIResource } from '../utility';

import { IPokemonSpecies } from './pokemon-species';

/**
 * Shapes used for sorting Pokémon in a Pokédex.
 */
export interface IPokemonShape extends INamedPokeAPIResource {
  /**
   * The "scientific" name of this Pokémon shape listed in different languages.
   */
  awesome_names: IAwesomeName[];

  /**
   * The name of this resource listed in different languages.
   */
  names: IName[];

  /**
   * A list of the Pokémon species that have this shape.
   */
  pokemon_species: IPokemonSpecies[];
}

export interface IAwesomeName {
  /**
   * The localized "scientific" name for an API resource in a specific language.
   */
  awesome_name: string;

  /**
   * The language this "scientific" name is in.
   */
  language: INamedAPIResource;
}
