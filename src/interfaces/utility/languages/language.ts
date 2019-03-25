import { IName } from '../common';
import { INamedPokeAPIResource } from '../..';

/**
 * Languages for translations of API resource information.
 */
export interface ILanguage extends INamedPokeAPIResource {
  /**
   * The two-letter code of the language. Note that it is not unique.
   */
  iso3166: string;

  /**
   * The two-letter code of the country where this language is spoken. Note that it is not unique.
   */
  iso639: string;

  /**
   * The name of this resource listed in different languages.
   */
  names: IName[];

  /**
   * Whether or not the games are published in this language.
   */
  official: boolean;
}
