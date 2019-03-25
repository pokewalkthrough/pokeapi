import { IEncounter } from './encounter';
import { INamedAPIResource } from './named-api-resource';

export interface IVersionEncounterDetail {
  /**
   * A list of encounters and their specifics.
   */
  encounter_details: IEncounter[];

  /**
   * The total percentage of all encounter potential.
   */
  max_chance: number;

  /**
   * The game version this encounter happens in.
   */
  version: INamedAPIResource;
}
