import { IPokeAPIResource } from '..';

/**
 * Characteristics indicate which stat contains a Pokémon's highest IV. A Pokémon's Characteristic is determined by the remainder of its highest IV divided
 * by 5 (gene_modulo). Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Characteristic) for greater detail.
 */
export interface ICharacteristic extends IPokeAPIResource {
  /**
   * The remainder of the highest stat/IV divided by 5.
   */
  gene_modulo: number;

  /**
   * The possible values of the highest stat that would result in a Pokémon recieving this characteristic when divided by 5.
   */
  possible_values: number[];
}
