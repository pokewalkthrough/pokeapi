import { IDescription, IName, INamedAPIResource } from '../utility';
import { INamedPokeAPIResource } from '..';

/**
 * Methods by which Pokémon can learn moves.
 */
export interface IMoveLearnMethod extends INamedPokeAPIResource {
  /**
   * The description of this resource listed in different languages.
   */
  descriptions: IDescription[];

  /**
   * The name of this resource listed in different languages.
   */
  names: IName[];

  /**
   * A list of version groups where moves can be learned through this method.
   */
  version_groups: INamedAPIResource[];
}
