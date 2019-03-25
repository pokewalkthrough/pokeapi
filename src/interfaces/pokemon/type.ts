import { INamedPokeAPIResource } from '../../types';
import { IGenerationGameIndex, IName, INamedAPIResource } from '../utility';

/**
 * Types are properties for Pokémon and their moves. Each type has three properties: which types of Pokémon it is super effective against, which types of
 * Pokémon it is not very effective against, and which types of Pokémon it is completely ineffective against.
 */
export interface IType extends INamedPokeAPIResource {
  /**
   * A detail of how effective this type is toward others and vice versa.
   */
  damage_relations: ITypeRelations;

  /**
   * A list of game indices relevent to this item by generation.
   */
  game_indices: IGenerationGameIndex[];

  /**
   * The generation this type was introduced in.
   */
  generation: INamedAPIResource;

  /**
   * The class of damage inflicted by this type.
   */
  move_damage_class: INamedAPIResource | null;

  /**
   * A list of moves that have this type.
   */
  moves: INamedAPIResource[];

  /**
   * The name of this resource listed in different languages.
   */
  names: IName[];

  /**
   * A list of details of Pokémon that have this type.
   */
  pokemon: ITypePokemon[];
}

export interface ITypePokemon {
  /**
   * The Pokémon that has the referenced type.
   */
  pokemon: INamedAPIResource;

  /**
   * The order the Pokémon's types are listed in.
   */
  slot: number;
}

export interface ITypeRelations {
  /**
   * A list of types that are very effective against this type.
   */
  double_damage_from: INamedAPIResource[];

  /**
   * A list of types this type is very effect against.
   */
  double_damage_to: INamedAPIResource[];

  /**
   * A list of types that are not very effective against this type.
   */
  half_damage_from: INamedAPIResource[];

  /**
   * A list of types this type is not very effect against.
   */
  half_damage_to: INamedAPIResource[];

  /**
   * A list of types that have no effect on this type.
   */
  no_damage_from: INamedAPIResource[];

  /**
   * A list of types this type has no effect on.
   */
  no_damage_to: INamedAPIResource[];
}
