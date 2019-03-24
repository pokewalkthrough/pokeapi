import { IPokeAPIResource } from '../../types';
import { INamedAPIResource } from '../utility';

/**
 * Machines are the representation of items that teach moves to Pokémon. They vary from version to version, so it is not certain that one specific TM or HM
 * corresponds to a single Machine.
 */
export interface IMachine extends IPokeAPIResource {
  /**
   * The TM or HM item that corresponds to this machine.
   */
  item: INamedAPIResource;

  /**
   * The move that is taught by this machine.
   */
  move: INamedAPIResource;

  /**
   * The version group that this machine applies to.
   */
  version_group: INamedAPIResource;
}
