import { IName, INamedAPIResource } from '../utility';
import { INamedPokeAPIResource } from '..';

/**
 * Egg Groups are categories which determine which Pokémon are able to interbreed. Pokémon may belong to either one or two Egg Groups.
 * Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Egg_Group) for greater detail.
 */
export interface IEggGroup extends INamedPokeAPIResource {
  /**
   * The name of this resource listed in different languages.
   */
  names: IName[];

  /**
   * A list of all Pokémon species that are members of this egg group.
   */
  pokemon_species: INamedAPIResource[];
}
