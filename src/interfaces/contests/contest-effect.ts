import { IEffect, IFlavorText } from '../utility';
import { IPokeAPIResource } from '..';

/**
 * Contest effects refer to the effects of moves when used in contests.
 */
export interface IContestEffect extends IPokeAPIResource {
  /**
   * The base number of hearts the user of this move gets.
   */
  appeal: number;

  /**
   * The result of this contest effect listed in different languages.
   */
  effect_entries: IEffect[];

  /**
   * The flavor text of this contest effect listed in different languages.
   */
  flavor_text_entries: IFlavorText[];

  /**
   * The base number of hearts the user's opponent loses.
   */
  jam: number;
}
