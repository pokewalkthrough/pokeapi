import { IAPIResource } from './api-resource';
import { INamedAPIResource } from './named-api-resource';

export interface IMachineVersionDetail {
  /**
   * The machine that teaches a move from an item.
   */
  machine: IAPIResource;

  /**
   * The version group of this specific machine.
   */
  version_group: INamedAPIResource;
}
