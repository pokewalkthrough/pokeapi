import { IName, INamedAPIResource } from '../utility';
import { INamedPokeAPIResource } from '..';

/**
 * Versions of the games, e.g., Red, Blue or Yellow.
 */
export interface IVersion extends INamedPokeAPIResource {
  /**
   * The name of this resource listed in different languages.
   */
  names: IName[];

  /**
   * The version group this version belongs to.
   */
  version_group: INamedAPIResource;
}
