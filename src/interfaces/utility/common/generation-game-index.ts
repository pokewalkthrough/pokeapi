import { INamedAPIResource } from './named-api-resource';

export interface IGenerationGameIndex {
  /**
   * The internal id of an API resource within game data.
   */
  game_index: number;

  /**
   * The generation relevent to this game index.
   */
  generation: INamedAPIResource;
}
