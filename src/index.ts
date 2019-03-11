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
  INamedAPIResourceList,
  IPokeAPIResource,
  ISuperContestEffect,
  TPokeAPIEndpoint,
} from './interfaces';
import { constructListUrl, constructUrl, isListNamed } from './util';

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
  public async get<T extends IPokeAPIResource>(endpoint: TPokeAPIEndpoint, filter: number | string): Promise<T> {
    const url: string = constructUrl(endpoint, filter);

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
    endpoint: 'berry' | 'berry-firmness' | 'berry-flavor' | 'contest-type' | 'encounter-method' | 'encounter-condition' | 'encounter-condition-value',
    limit?: number,
    offset?: number,
  ): Promise<INamedAPIResourceList>;
  public async getList(endpoint: 'contest-effect' | 'super-contest-effect', limit?: number, offset?: number): Promise<IAPIResourceList>;
  public async getList(endpoint: TPokeAPIEndpoint, limit?: number, offset?: number): Promise<IAPIResourceList | INamedAPIResourceList> {
    const url: string = constructListUrl(endpoint, limit, offset);

    return axios
      .get<IAPIResourceList | INamedAPIResourceList>(url)
      .then((value: AxiosResponse<IAPIResourceList | INamedAPIResourceList>) => {
        if (isListNamed(value.data)) {
          return value.data as INamedAPIResourceList;
        } else {
          return value.data as IAPIResourceList;
        }
      })
      .catch((reason: any) => {
        return reason; // TODO: test errors
      });
  }
}
