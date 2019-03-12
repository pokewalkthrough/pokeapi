import { AxiosResponse, default as axios } from 'axios';

import {
  IAPIResourceList,
  IBerry,
  IBerryFirmness,
  IBerryFlavor,
  IContestEffect,
  IContestType,
  IEncounterCondition,
  IEncounterConditionValue,
  IEncounterMethod,
  IEvolutionChain,
  IEvolutionTrigger,
  IGeneration,
  IItem,
  IItemAttribute,
  IItemCategory,
  IItemFlingEffect,
  IItemPocket,
  INamedAPIResourceList,
  IPokeAPIResource,
  IPokedex,
  ISuperContestEffect,
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
      | 'item-pocket',
    limit?: number,
    offset?: number,
  ): Promise<INamedAPIResourceList>;
  public async getList(endpoint: 'contest-effect' | 'super-contest-effect' | 'evolution-chain', limit?: number, offset?: number): Promise<IAPIResourceList>;
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
