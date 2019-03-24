import { INamedAPIResource } from './named-api-resource';

export interface IVersionGameIndex {
  /**
   * The internal id of an API resource within game data.
   */
  game_index: number;

  /**
   * The version relevent to this game index.
   */
  version: INamedAPIResource;
}
