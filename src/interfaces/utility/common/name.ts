import { INamedAPIResource } from './named-api-resource';

export interface IName {
  /**
   * The language this name is in.
   */
  language: INamedAPIResource;

  /**
   * The localized name for an API resource in a specific language.
   */
  name: string;
}
