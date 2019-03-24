import { IName, INamedAPIResource, INamedPokeAPIResource } from '../../types';

/**
 * Evolution triggers are the events and conditions that cause a Pokémon to evolve. Check out
 * [Bulbapedia](https://bulbapedia.bulbagarden.net/wiki/Methods_of_evolution) for greater detail.
 */
export interface IEvolutionTrigger extends INamedPokeAPIResource {
  /**
   * The name of this resource listed in different languages.
   */
  names: IName[];

  /**
   * A list of pokemon species that result from this evolution trigger.
   */
  pokemon_species: INamedAPIResource[];
}
