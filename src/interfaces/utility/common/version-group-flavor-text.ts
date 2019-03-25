import { INamedAPIResource } from './named-api-resource';

export interface IVersionGroupFlavorText {
  /**
   * The language this name is in.
   */
  language: INamedAPIResource;

  /**
   * The localized name for an API resource in a specific language.
   */
  text: string;

  /**
   * The version group which uses this flavor text.
   */
  version_group: INamedAPIResource;
}
