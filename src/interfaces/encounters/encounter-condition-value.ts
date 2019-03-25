import { IName, INamedAPIResource } from '../utility';
import { INamedPokeAPIResource } from '..';

/**
 * Encounter condition values are the various states that an encounter condition can have, i.e., time of day can be either day or night.
 */
export interface IEncounterConditionValue extends INamedPokeAPIResource {
  /**
   * The condition this encounter condition value pertains to.
   */
  condition: INamedAPIResource;

  /**
   * The name of this resource listed in different languages.
   */
  names: IName[];
}
