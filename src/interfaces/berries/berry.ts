import { INamedPokeAPIResource } from '../../types';
import { INamedAPIResource } from '../utility';

/**
 * Berries are small fruits that can provide HP and status condition restoration, stat enhancement, and even damage negation when eaten by a Pokémon. Check
 * out [Bulbapedia](https://bulbapedia.bulbagarden.net/wiki/Berry) for greater detail.
 */
export interface IBerry extends INamedPokeAPIResource {
  /**
   * The firmness of this berry, used in making Pokéblocks or Poffins.
   */
  firmness: INamedAPIResource;

  /**
   * A list of references to each flavor a berry can have and the potency of each of those flavors in regard to this berry.
   */
  flavors: IBerryFlavorMap[];

  /**
   * Time it takes the tree to grow one stage, in hours. Berry trees go through four of these growth stages before they can be picked.
   */
  growth_time: number;

  /**
   * Berries are actually items. This is a reference to the item specific data for this berry.
   */
  item: INamedAPIResource;

  /**
   * The maximum number of these berries that can grow on one tree in Generation IV.
   */
  max_harvest: number;

  /**
   * The power of the move "Natural Gift" when used with this Berry.
   */
  natural_gift_power: number;

  /**
   * The type inherited by "Natural Gift" when used with this Berry.
   */
  natural_gift_type: INamedAPIResource;

  /**
   * The size of this Berry, in millimeters.
   */
  size: number;

  /**
   * The smoothness of this Berry, used in making Pokéblocks or Poffins.
   */
  smoothness: number;

  /**
   * The speed at which this Berry dries out the soil as it grows. A higher rate means the soil dries more quickly.
   */
  soil_dryness: number;
}

export interface IBerryFlavorMap {
  /**
   * The referenced berry flavor.
   */
  flavor: INamedAPIResource;

  /**
   * How powerful the referenced flavor is for this berry.
   */
  potency: number;
}
