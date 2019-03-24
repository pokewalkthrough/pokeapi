import { INamedPokeAPIResource } from '../../types';
import { INamedAPIResource } from '../utility';

/**
 * Version groups categorize highly similar versions of the games.
 */
export interface IVersionGroup extends INamedPokeAPIResource {
  /**
   * The generation this version was introduced in.
   */
  generation: INamedAPIResource;

  /**
   * A list of methods in which Pokémon can learn moves in this version group.
   */
  move_learn_methods: INamedAPIResource[];

  /**
   * Order for sorting. Almost by date of release, except similar versions are grouped together.
   */
  order: number;

  /**
   * A list of Pokédexes introduces in this version group.
   */
  pokedexes: INamedAPIResource[];

  /**
   * A list of regions that can be visited in this version group.
   */
  regions: INamedAPIResource[];

  /**
   * The versions this version group owns.
   */
  versions: INamedAPIResource[];
}
