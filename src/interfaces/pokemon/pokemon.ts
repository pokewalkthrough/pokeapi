import { INamedAPIResource, IVersionEncounterDetail, IVersionGameIndex } from '../utility';
import { INamedPokeAPIResource } from '..';

/**
 * Pokémon are the creatures that inhabit the world of the Pokémon games. They can be caught using Pokéballs and trained by battling with other Pokémon.
 * Each Pokémon belongs to a specific species but may take on a variant which makes it differ from other Pokémon of the same species, such as base stats,
 * available abilities and typings. See [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_(species)) for greater detail.
 */
export interface IPokemon extends INamedPokeAPIResource {
  /**
   * A list of abilities this Pokémon could potentially have.
   */
  abilities: IPokemonAbility[];

  /**
   * The base experience gained for defeating this Pokémon.
   */
  base_experience: number;

  /**
   * A list of forms this Pokémon can take on.
   */
  forms: INamedAPIResource[];

  /**
   * A list of game indices relevent to Pokémon item by generation.
   */
  game_indices: IVersionGameIndex[];

  /**
   * The height of this Pokémon in decimetres.
   */
  height: number;

  /**
   * A list of items this Pokémon may be holding when encountered.
   */
  held_items: IPokemonHeldItem[];

  /**
   * Set for exactly one Pokémon used as the default for each species.
   */
  is_default: boolean;

  /**
   * A link to a list of location areas, as well as encounter details pertaining to specific versions.
   */
  location_area_encounters: string;

  /**
   * A list of moves along with learn methods and level details pertaining to specific version groups.
   */
  moves: IPokemonMove[];

  /**
   * Order for sorting. Almost national order, except families are grouped together.
   */
  order: number;

  /**
   * The species this Pokémon belongs to.
   */
  species: INamedAPIResource;

  /**
   * A set of sprites used to depict this Pokémon in the game.
   */
  sprites: IPokemonSprites;

  /**
   * A list of base stat values for this Pokémon.
   */
  stats: IPokemonStat[];

  /**
   * A list of details showing types this Pokémon has.
   */
  types: IPokemonType[];

  /**
   * The weight of this Pokémon in hectograms.
   */
  weight: number;
}

export interface IPokemonAbility {
  /**
   * The ability the Pokémon may have.
   */
  ability: INamedAPIResource;

  /**
   * Whether or not this is a hidden ability.
   */
  is_hidden: boolean;

  /**
   * The slot this ability occupies in this Pokémon species.
   */
  slot: number;
}

export interface IPokemonType {
  /**
   * The order the Pokémon's types are listed in.
   */
  slot: number;

  /**
   * The type the referenced Pokémon has.
   */
  type: INamedAPIResource;
}

export interface IPokemonHeldItem {
  /**
   * The item the referenced Pokémon holds.
   */
  item: INamedAPIResource;

  /**
   * The details of the different versions in which the item is held.
   */
  version_details: IPokemonHeldItemVersion[];
}

export interface IPokemonHeldItemVersion {
  /**
   * How often the item is held.
   */
  rarity: number;

  /**
   * The version in which the item is held.
   */
  version: INamedAPIResource;
}

export interface IPokemonMove {
  /**
   * The move the Pokémon can learn.
   */
  move: INamedAPIResource;

  /**
   * The details of the version in which the Pokémon can learn the move.
   */
  version_group_details: IPokemonMoveVersion[];
}

export interface IPokemonMoveVersion {
  /**
   * The minimum level to learn the move.
   */
  level_learned_at: number;

  /**
   * The method by which the move is learned.
   */
  move_learn_method: INamedAPIResource;

  /**
   * The version group in which the move is learned.
   */
  version_group: INamedAPIResource;
}

export interface IPokemonStat {
  /**
   * The base value of the stat.
   */
  base_stat: number;

  /**
   * The effort points (EV) the Pokémon has in the stat.
   */
  effort: number;

  /**
   * The stat the Pokémon has.
   */
  stat: INamedAPIResource;
}

export interface IPokemonSprites {
  /**
   * The default depiction of this Pokémon from the back in battle.
   */
  back_default: string | null;

  /**
   * The female depiction of this Pokémon from the back in battle.
   */
  back_female: string | null;

  /**
   * The shiny depiction of this Pokémon from the back in battle.
   */
  back_shiny: string | null;

  /**
   * The shiny female depiction of this Pokémon from the back in battle.
   */
  back_shiny_female: string | null;

  /**
   * The default depiction of this Pokémon from the front in battle.
   */
  front_default: string | null;

  /**
   * The female depiction of this Pokémon from the front in battle.
   */
  front_female: string | null;

  /**
   * The shiny depiction of this Pokémon from the front in battle.
   */
  front_shiny: string | null;

  /**
   * The shiny female depiction of this Pokémon from the front in battle.
   */
  front_shiny_female: string | null;
}

export interface ILocationAreaEncounter {
  /**
   * The location area the referenced Pokémon can be encountered in.
   */
  location_area: INamedAPIResource;

  /**
   * A list of versions and encounters with the referenced Pokémon that might happen.
   */
  version_details: IVersionEncounterDetail[];
}
