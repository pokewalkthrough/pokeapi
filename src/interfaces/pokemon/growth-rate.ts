import { INamedPokeAPIResource } from '../../types';
import { IDescription, INamedAPIResource } from '../utility';

/**
 * Growth rates are the speed with which Pokémon gain levels through experience. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Experience)
 * for greater detail.
 */
export interface IGrowthRate extends INamedPokeAPIResource {
  /**
   * The descriptions of this characteristic listed in different languages.
   */
  descriptions: IDescription[];

  /**
   * The formula used to calculate the rate at which the Pokémon species gains level.
   */
  formula: string;

  /**
   * A list of levels and the amount of experienced needed to atain them based on this growth rate.
   */
  levels: IGrowthRateExperienceLevel[];

  /**
   * A list of Pokémon species that gain levels at this growth rate.
   */
  pokemon_species: INamedAPIResource[];
}

export interface IGrowthRateExperienceLevel {
  /**
   * The amount of experience required to reach the referenced level.
   */
  experience: number;

  /**
   * The level gained.
   */
  level: number;
}
