import { INamedAPIResource } from './named-api-resource';

export interface IFlavorText {
  /**
   * The localized flavor text for an API resource in a specific language.
   */
  flavor_text: string;

  /**
   * The language this name is in.
   */
  language: INamedAPIResource;
}
