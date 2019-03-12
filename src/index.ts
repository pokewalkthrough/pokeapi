import { AxiosResponse, default as axios } from 'axios';

import {
  IAPIResourceList,
  IAbility,
  IBerry,
  IBerryFirmness,
  IBerryFlavor,
  ICharacteristic,
  IContestEffect,
  IContestType,
  IEggGroup,
  IEncounterCondition,
  IEncounterConditionValue,
  IEncounterMethod,
  IEvolutionChain,
  IEvolutionTrigger,
  IGender,
  IGeneration,
  IGrowthRate,
  IItem,
  IItemAttribute,
  IItemCategory,
  IItemFlingEffect,
  IItemPocket,
  ILocation,
  ILocationArea,
  IMachine,
  IMove,
  IMoveAilment,
  IMoveBattleStyle,
  IMoveCategory,
  IMoveDamageClass,
  IMoveLearnMethod,
  IMoveTarget,
  INamedAPIResourceList,
  INature,
  IPalParkArea,
  IPokeAPIResource,
  IPokeathlonStat,
  IPokedex,
  IPokemon,
  IPokemonColor,
  IPokemonForm,
  IPokemonHabitat,
  IPokemonShape,
  IPokemonSpecies,
  IRegion,
  IStat,
  ISuperContestEffect,
  IType,
  IVersion,
  IVersionGroup,
  TPokeAPIEndpoint,
} from './interfaces';
import { constructListUrl, constructUrl } from './util';

export class PokeAPI {
  public async get<T extends IBerry>(endpoint: 'berry', filter: number | string): Promise<T>;
  public async get<T extends IBerryFirmness>(endpoint: 'berry-firmness', filter: number | string): Promise<T>;
  public async get<T extends IBerryFlavor>(endpoint: 'berry-flavor', filter: number | string): Promise<T>;
  public async get<T extends IContestType>(endpoint: 'contest-type', filter: number | string): Promise<T>;
  public async get<T extends IContestEffect>(endpoint: 'contest-effect', filter: number): Promise<T>;
  public async get<T extends ISuperContestEffect>(endpoint: 'super-contest-effect', filter: number): Promise<T>;
  public async get<T extends IEncounterMethod>(endpoint: 'encounter-method', filter: number | string): Promise<T>;
  public async get<T extends IEncounterCondition>(endpoint: 'encounter-condition', filter: number | string): Promise<T>;
  public async get<T extends IEncounterConditionValue>(endpoint: 'encounter-condition-value', filter: number | string): Promise<T>;
  public async get<T extends IEvolutionChain>(endpoint: 'evolution-chain', filter: number): Promise<T>;
  public async get<T extends IEvolutionTrigger>(endpoint: 'evolution-trigger', filter: number | string): Promise<T>;
  public async get<T extends IGeneration>(endpoint: 'generation', filter: number | string): Promise<T>;
  public async get<T extends IPokedex>(endpoint: 'pokedex', filter: number | string): Promise<T>;
  public async get<T extends IVersion>(endpoint: 'version', filter: number | string): Promise<T>;
  public async get<T extends IVersionGroup>(endpoint: 'version-group', filter: number | string): Promise<T>;
  public async get<T extends IItem>(endpoint: 'item', filter: number | string): Promise<T>;
  public async get<T extends IItemAttribute>(endpoint: 'item-attribute', filter: number | string): Promise<T>;
  public async get<T extends IItemCategory>(endpoint: 'item-category', filter: number | string): Promise<T>;
  public async get<T extends IItemFlingEffect>(endpoint: 'item-fling-effect', filter: number | string): Promise<T>;
  public async get<T extends IItemPocket>(endpoint: 'item-pocket', filter: number | string): Promise<T>;
  public async get<T extends ILocation>(endpoint: 'location', filter: number | string): Promise<T>;
  public async get<T extends ILocationArea>(endpoint: 'location-area', filter: number | string): Promise<T>;
  public async get<T extends IPalParkArea>(endpoint: 'pal-park-area', filter: number | string): Promise<T>;
  public async get<T extends IRegion>(endpoint: 'region', filter: number | string): Promise<T>;
  public async get<T extends IMachine>(endpoint: 'machine', filter: number): Promise<T>;
  public async get<T extends IMove>(endpoint: 'move', filter: number | string): Promise<T>;
  public async get<T extends IMoveAilment>(endpoint: 'move-ailment', filter: number | string): Promise<T>;
  public async get<T extends IMoveBattleStyle>(endpoint: 'move-battle-style', filter: number | string): Promise<T>;
  public async get<T extends IMoveCategory>(endpoint: 'move-category', filter: number | string): Promise<T>;
  public async get<T extends IMoveDamageClass>(endpoint: 'move-damage-class', filter: number | string): Promise<T>;
  public async get<T extends IMoveLearnMethod>(endpoint: 'move-learn-method', filter: number | string): Promise<T>;
  public async get<T extends IMoveTarget>(endpoint: 'move-target', filter: number | string): Promise<T>;
  public async get<T extends IAbility>(endpoint: 'ability', filter: number | string): Promise<T>;
  public async get<T extends ICharacteristic>(endpoint: 'characteristic', filter: number): Promise<T>;
  public async get<T extends IEggGroup>(endpoint: 'egg-group', filter: number | string): Promise<T>;
  public async get<T extends IGender>(endpoint: 'gender', filter: number | string): Promise<T>;
  public async get<T extends IGrowthRate>(endpoint: 'growth-rate', filter: number | string): Promise<T>;
  public async get<T extends INature>(endpoint: 'nature', filter: number | string): Promise<T>;
  public async get<T extends IPokeathlonStat>(endpoint: 'pokeathlon-stat', filter: number | string): Promise<T>;
  public async get<T extends IPokemon>(endpoint: 'pokemon', filter: number | string): Promise<T>;
  public async get<T extends IPokemonColor>(endpoint: 'pokemon-color', filter: number | string): Promise<T>;
  public async get<T extends IPokemonForm>(endpoint: 'pokemon-form', filter: number | string): Promise<T>;
  public async get<T extends IPokemonHabitat>(endpoint: 'pokemon-habitat', filter: number | string): Promise<T>;
  public async get<T extends IPokemonShape>(endpoint: 'pokemon-shape', filter: number | string): Promise<T>;
  public async get<T extends IPokemonSpecies>(endpoint: 'pokemon-species', filter: number | string): Promise<T>;
  public async get<T extends IStat>(endpoint: 'stat', filter: number | string): Promise<T>;
  public async get<T extends IType>(endpoint: 'type', filter: number | string): Promise<T>;
  public async get<T extends IPokeAPIResource>(endpoint: TPokeAPIEndpoint, filter: number | string): Promise<T> {
    const url: string = constructUrl(endpoint, filter);

    // TODO: Remove axios and replace with native method to reduce dependencies
    return axios
      .get<T>(url)
      .then((value: AxiosResponse<T>) => {
        return value.data;
      })
      .catch((reason: any) => {
        return reason; // TODO: test errors
      });
  }

  public async getList(
    endpoint:
      | 'berry'
      | 'berry-firmness'
      | 'berry-flavor'
      | 'contest-type'
      | 'encounter-method'
      | 'encounter-condition'
      | 'encounter-condition-value'
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
      | 'move'
      | 'move-ailment'
      | 'move-battle-style'
      | 'move-category'
      | 'move-damage-class'
      | 'move-learn-method'
      | 'move-target'
      | 'ability'
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
      | 'type',
    limit?: number,
    offset?: number,
  ): Promise<INamedAPIResourceList>;
  public async getList(
    endpoint: 'contest-effect' | 'super-contest-effect' | 'evolution-chain' | 'machine' | 'characteristic',
    limit?: number,
    offset?: number,
  ): Promise<IAPIResourceList>;
  public async getList(endpoint: TPokeAPIEndpoint, limit?: number, offset?: number): Promise<IAPIResourceList | INamedAPIResourceList> {
    const url: string = constructListUrl(endpoint, limit, offset);

    // TODO: Remove axios and replace with native method to reduce dependencies
    return axios
      .get<IAPIResourceList | INamedAPIResourceList>(url)
      .then((value: AxiosResponse<IAPIResourceList | INamedAPIResourceList>) => {
        return value.data;
      })
      .catch((reason: any) => {
        return reason; // TODO: test errors
      });
  }
}
