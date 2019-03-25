import { INamedAPIResource } from './named-api-resource';

export interface IDescription {
  /**
   * The localized description for an API resource in a specific language.
   */
  description: string;

  /**
   * The language this name is in.
   */
  language: INamedAPIResource;
}
