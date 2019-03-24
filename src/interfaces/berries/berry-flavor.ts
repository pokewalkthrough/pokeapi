import { INamedPokeAPIResource } from '../../types';
import { IName, INamedAPIResource } from '../utility';

/**
 * Flavors determine whether a Pokémon will benefit or suffer from eating a berry based on their [nature](https://pokeapi.co/docs/v2.html/#natures). Check out
 * [Bulbapedia](https://bulbapedia.bulbagarden.net/wiki/Flavor) for greater detail.
 */
export interface IBerryFlavor extends INamedPokeAPIResource {
  /**
   * A list of the berries with this flavor.
   */
  berries: IFlavorBerryMap[];

  /**
   * The contest type that correlates with this berry flavor.
   */
  contest_type: INamedAPIResource;

  /**
   * The name of this resource listed in different languages.
   */
  names: IName[];
}

export interface IFlavorBerryMap {
  /**
   * The berry with the referenced flavor.
   */
  berry: INamedAPIResource;

  /**
   * How powerful the referenced flavor is for this berry.
   */
  potency: number;
}
