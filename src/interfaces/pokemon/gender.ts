import { INamedPokeAPIResource } from '../../types';
import { INamedAPIResource } from '../utility';

/**
 * Genders were introduced in Generation II for the purposes of breeding Pokémon but can also result in visual differences or even different evolutionary
 * lines. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Gender) for greater detail.
 */
export interface IGender extends INamedPokeAPIResource {
  /**
   * A list of Pokémon species that can be this gender and how likely it is that they will be.
   */
  pokemon_species_details: IPokemonSpeciesGender[];

  /**
   * A list of Pokémon species that required this gender in order for a Pokémon to evolve into them.
   */
  required_for_evolution: INamedAPIResource[];
}

export interface IPokemonSpeciesGender {
  /**
   * A Pokémon species that can be the referenced gender.
   */
  pokemon_species: INamedAPIResource;

  /**
   * The chance of this Pokémon being female, in eighths; or -1 for genderless.
   */
  rate: number;
}
