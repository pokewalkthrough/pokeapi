import { INamedAPIResource } from './named-api-resource';

export interface IVerboseEffect {
  /**
   * The localized effect text for an API resource in a specific language.
   */
  effect: string;

  /**
   * The language this effect is in.
   */
  language: INamedAPIResource;

  /**
   * The localized effect text in brief.
   */
  short_effect: string;
}
