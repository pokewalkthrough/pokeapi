import { IAPIResource, IGenerationGameIndex, IMachineVersionDetail, IName, INamedAPIResource, IVerboseEffect, IVersionGroupFlavorText } from '../utility';
import { INamedPokeAPIResource } from '..';

/**
 * An item is an object in the games which the player can pick up, keep in their bag, and use in some manner. They have various uses, including healing,
 * powering up, helping catch Pokémon, or to access a new area.
 */
export interface IItem extends INamedPokeAPIResource {
  /**
   * A list of attributes this item has.
   */
  attributes: INamedAPIResource[];

  /**
   * An evolution chain this item requires to produce a bay during mating.
   */
  baby_trigger_for: IAPIResource | null;

  /**
   * The category of items this item falls into.
   */
  category: INamedAPIResource;

  /**
   * The price of this item in stores.
   */
  cost: number;

  /**
   * The effect of this ability listed in different languages.
   */
  effect_entries: IVerboseEffect[];

  /**
   * The flavor text of this ability listed in different languages.
   */
  flavor_text_entries: IVersionGroupFlavorText[];

  /**
   * The effect of the move Fling when used with this item.
   */
  fling_effect: INamedAPIResource | null;

  /**
   * The power of the move Fling when used with this item.
   */
  fling_power: number | null;

  /**
   * A list of game indices relevent to this item by generation.
   */
  game_indices: IGenerationGameIndex[];

  /**
   * A list of Pokémon that might be found in the wild holding this item.
   */
  held_by_pokemon: IItemHolderPokemon[];

  /**
   * A list of the machines related to this item.
   */
  machines: IMachineVersionDetail[];

  /**
   * The name of this item listed in different languages.
   */
  names: IName[];

  /**
   * A set of sprites used to depict this item in the game.
   */
  sprites: IItemSprites;
}

export interface IItemSprites {
  /**
   * The default depiction of this item.
   */
  default: string | null;
}

export interface IItemHolderPokemon {
  /**
   * The Pokémon that holds this item.
   */
  pokemon: INamedAPIResource;

  /**
   * The details for the version that this item is held in by the Pokémon.
   */
  version_details: IItemHolderPokemonVersionDetail[];
}

export interface IItemHolderPokemonVersionDetail {
  /**
   * How often this Pokémon holds this item in this version.
   */
  rarity: number;

  /**
   * The version that this item is held in by the Pokémon.
   */
  version: INamedAPIResource;
}
