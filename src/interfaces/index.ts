// TODO: Add some links to the documentation (for instance, link to the type a specific INamedAPIResource links to)

export interface IPokeAPIResource {
  id: number;
}

export interface INamedPokeAPIResource {
  id: number;
  name: string;
}

export type TPokeAPIEndpoint =
  | 'berry'
  | 'berry-firmness'
  | 'berry-flavor'
  | 'contest-type'
  | 'contest-effect'
  | 'super-contest-effect'
  | 'encounter-method'
  | 'encounter-condition'
  | 'encounter-condition-value'
  | 'evolution-chain'
  | 'evolution-trigger'
  | 'generation'
  | 'pokedex'
  | 'version'
  | 'version-group'
  | 'item'
  | 'item-attribute'
  | 'item-category'
  | 'item-fling-effect'
  | 'item-pocket'
  | 'location'
  | 'location-area'
  | 'pal-park-area'
  | 'region'
  | 'machine'
  | 'move'
  | 'move-ailment'
  | 'move-battle-style'
  | 'move-category'
  | 'move-damage-class'
  | 'move-learn-method'
  | 'move-target'
  | 'ability'
  | 'characteristic'
  | 'egg-group'
  | 'gender'
  | 'growth-rate'
  | 'nature'
  | 'pokeathlon-stat'
  | 'pokemon'
  | 'pokemon-color'
  | 'pokemon-form'
  | 'pokemon-habitat'
  | 'pokemon-shape'
  | 'pokemon-species'
  | 'stat'
  | 'type'
  | 'language';

export { IAPIResourceList, INamedAPIResourceList } from './resource-lists';
export { IBerry, IBerryFirmness, IBerryFlavor, IBerryFlavorMap, IFlavorBerryMap } from './berries';
export { IContestEffect, IContestName, IContestType, ISuperContestEffect } from './contests';
export { IEncounterCondition, IEncounterConditionValue, IEncounterMethod } from './encounters';
export { IChainLink, IEvolutionChain, IEvolutionDetail, IEvolutionTrigger } from './evolution';
export { IGeneration, IPokedex, IPokemonEntry, IVersion, IVersionGroup } from './games';
export {
  IItem,
  IItemAttribute,
  IItemCategory,
  IItemFlingEffect,
  IItemHolderPokemon,
  IItemHolderPokemonVersionDetail,
  IItemPocket,
  IItemSprites,
} from './items';
export {
  IEncounterMethodRate,
  IEncounterVersionDetails,
  ILocation,
  ILocationArea,
  IPalParkArea,
  IPalParkEncounterSpecies,
  IPokemonEncounter,
  IRegion,
} from './locations';
export { IMachine } from './machines';
export {
  IContestComboDetail,
  IContestComboSets,
  IMove,
  IMoveAilment,
  IMoveBattleStyle,
  IMoveCategory,
  IMoveDamageClass,
  IMoveFlavorText,
  IMoveLearnMethod,
  IMoveMetaData,
  IMoveStatChange,
  IMoveTarget,
  IPastMoveStatValues,
} from './moves';
export {
  IAbility,
  IAbilityEffectChange,
  IAbilityFlavorText,
  IAbilityPokemon,
  IAwesomeName,
  ICharacteristic,
  IEggGroup,
  IGender,
  IGenus,
  IGrowthRate,
  IGrowthRateExperienceLevel,
  ILocationAreaEncounter,
  IMoveBattleStylePreference,
  IMoveStatAffect,
  IMoveStatAffectSets,
  INature,
  INaturePokeathlonStatAffect,
  INaturePokeathlonStatAffectSets,
  INatureStatAffectSets,
  INatureStatChange,
  IPalParkEncounterArea,
  IPokeathlonStat,
  IPokemon,
  IPokemonAbility,
  IPokemonColor,
  IPokemonForm,
  IPokemonFormSprites,
  IPokemonHabitat,
  IPokemonHeldItem,
  IPokemonHeldItemVersion,
  IPokemonMove,
  IPokemonMoveVersion,
  IPokemonShape,
  IPokemonSpecies,
  IPokemonSpeciesDexEntry,
  IPokemonSpeciesGender,
  IPokemonSpeciesVariety,
  IPokemonSprites,
  IPokemonStat,
  IPokemonType,
  IStat,
  IType,
  ITypePokemon,
  ITypeRelations,
} from './pokemon';
export {
  ILanguage,
  IAPIResource,
  IDescription,
  IEffect,
  IEncounter,
  IFlavorText,
  IGenerationGameIndex,
  IMachineVersionDetail,
  IName,
  INamedAPIResource,
  IVerboseEffect,
  IVersionEncounterDetail,
  IVersionGameIndex,
  IVersionGroupFlavorText,
} from './utility';
