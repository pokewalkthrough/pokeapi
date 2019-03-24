import { INamedPokeAPIResource } from '../../types';
import { IEffect, INamedAPIResource } from '../utility';

/**
 * The various effects of the move "Fling" when used with different items.
 */
export interface IItemFlingEffect extends INamedPokeAPIResource {
  /**
   * The result of this fling effect listed in different languages.
   */
  effect_entries: IEffect[];

  /**
   * A list of items that have this fling effect.
   */
  items: INamedAPIResource[];
}
