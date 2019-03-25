import { INamedPokeAPIResource } from '../../types';
import { IDescription, IName, INamedAPIResource } from '../utility';

/**
 * Targets moves can be directed at during battle. Targets can be Pokémon, environments or even other moves.
 */
export interface IMoveTarget extends INamedPokeAPIResource {
  /**
   * The description of this resource listed in different languages.
   */
  descriptions: IDescription[];

  /**
   * A list of moves that that are directed at this target.
   */
  moves: INamedAPIResource[];

  /**
   * The name of this resource listed in different languages.
   */
  names: IName[];
}
