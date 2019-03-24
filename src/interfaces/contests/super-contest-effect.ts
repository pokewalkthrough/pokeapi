import { IPokeAPIResource } from '../../types';
import { IFlavorText, INamedAPIResource } from '../utility';

/**
 * Super contest effects refer to the effects of moves when used in super contests.
 */
export interface ISuperContestEffect extends IPokeAPIResource {
  /**
   * The level of appeal this super contest effect has.
   */
  appeal: number;

  /**
   * The flavor text of this super contest effect listed in different languages.
   */
  flavor_text_entries: IFlavorText[];

  /**
   * A list of moves that have the effect when used in super contests.
   */
  moves: INamedAPIResource[];
}
