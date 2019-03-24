import { INamedPokeAPIResource } from '../../types';
import { IName, INamedAPIResource } from '../utility';

/**
 * Berries can be soft or hard. Check out [Bulbapedia](https://bulbapedia.bulbagarden.net/wiki/Category:Berries_by_firmness) for greater detail.
 */
export interface IBerryFirmness extends INamedPokeAPIResource {
  /**
   * A list of the berries with this firmness.
   */
  berries: INamedAPIResource[];

  /**
   * The name of this resource listed in different languages.
   */
  names: IName[];
}
