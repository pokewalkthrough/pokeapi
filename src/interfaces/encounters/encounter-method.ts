import { IName, INamedPokeAPIResource } from '../../types';

/**
 * Methods by which the player might can encounter Pokémon in the wild, e.g., walking in tall grass. Check out
 * [Bulbapedia](https://bulbapedia.bulbagarden.net/wiki/Wild_Pok%C3%A9mon) for greater detail.
 */
export interface IEncounterMethod extends INamedPokeAPIResource {
  /**
   * The name of this resource listed in different languages.
   */
  names: IName[];

  /**
   * A good value for sorting.
   */
  order: number;
}
