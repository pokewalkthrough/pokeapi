import { IName, INamedAPIResource } from '../utility';
import { INamedPokeAPIResource } from '..';

/**
 * Some Pokémon may appear in one of multiple, visually different forms. These differences are purely cosmetic. For variations within a Pokémon species, which
 * do differ in more than just visuals, the 'Pokémon' entity is used to represent such a variety.
 */
export interface IPokemonForm extends INamedPokeAPIResource {
  /**
   * The name of this form.
   */
  form_name: string;

  /**
   * The form specific form name of this Pokémon form, or empty if the form does not have a specific name.
   */
  form_names: IName[];

  /**
   * The order in which forms should be sorted within a species' forms.
   */
  form_order: number;

  /**
   * Whether or not this form can only happen during battle.
   */
  is_battle_only: boolean;

  /**
   * True for exactly one form used as the default for each Pokémon.
   */
  is_default: boolean;

  /**
   * Whether or not this form requires mega evolution.
   */
  is_mega: boolean;

  /**
   * The form specific full name of this Pokémon form, or empty if the form does not have a specific name.
   */
  names: IName[];

  /**
   * The order in which forms should be sorted within all forms. Multiple forms may have equal order, in which case they should fall back on sorting by name.
   */
  order: number;

  /**
   * The Pokémon that can take on this form.
   */
  pokemon: INamedAPIResource;

  /**
   * A set of sprites used to depict this Pokémon form in the game.
   */
  sprites: IPokemonFormSprites;

  /**
   * The version group this Pokémon form was introduced in.
   */
  version_group: INamedAPIResource;
}

export interface IPokemonFormSprites {
  /**
   * The default depiction of this Pokémon form from the back in battle.
   */
  back_default: string | null;

  /**
   * The shiny depiction of this Pokémon form from the back in battle.
   */
  back_shiny: string | null;

  /**
   * The default depiction of this Pokémon form from the front in battle.
   */
  front_default: string | null;

  /**
   * The shiny depiction of this Pokémon form from the front in battle.
   */
  front_shiny: string | null;
}
