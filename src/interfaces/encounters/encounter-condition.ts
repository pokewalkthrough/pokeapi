import { IName, INamedAPIResource, INamedPokeAPIResource } from '../../types';

/**
 * Conditions which affect what pokemon might appear in the wild, e.g., day or night.
 */
export interface IEncounterCondition extends INamedPokeAPIResource {
  /**
   * The name of this resource listed in different languages.
   */
  names: IName[];
  /**
   * A list of possible values for this encounter condition.
   */
  values: INamedAPIResource[];
}
