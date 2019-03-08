import request from 'request-promise-native';

import {
  IAPIResourceList,
  IBerry,
  IBerryFirmness,
  IBerryFlavor,
  IContestEffect,
  IContestType,
  INamedAPIResourceList,
  IPokeAPIResource,
  ISuperContestEffect,
  TPokeAPIEndpoint,
} from './interfaces';

export class PokeAPI {
  protected static _API_VERSION: string = 'v2';
  protected static _BASE: string = 'https://pokeapi.co';

  public async get<T extends IBerry>(endpoint: 'berry', filter: number | string): Promise<T>;
  public async get<T extends IBerryFirmness>(endpoint: 'berry-firmness', filter: number | string): Promise<T>;
  public async get<T extends IBerryFlavor>(endpoint: 'berry-flavor', filter: number | string): Promise<T>;
  public async get<T extends IContestType>(endpoint: 'contest-type', filter: number | string): Promise<T>;
  public async get<T extends IContestEffect>(endpoint: 'contest-effect', filter: number): Promise<T>;
  public async get<T extends ISuperContestEffect>(endpoint: 'super-contest-effect', filter: number): Promise<T>;
  public async get<T extends IPokeAPIResource>(endpoint: TPokeAPIEndpoint, filter: number | string): Promise<T> {
    const url: string = this._constructUrl(endpoint, filter);

    return request(url)
      .then((value: any) => {
        return JSON.parse(value) as T;
      })
      .catch((reason: any) => {
        return reason; // TODO: test errors
      });
  }

  public async getList(endpoint: 'berry' | 'berry-firmness' | 'berry-flavor' | 'contest-type', limit?: number, offset?: number): Promise<INamedAPIResourceList>;
  public async getList(endpoint: 'contest-effect' | 'super-contest-effect', limit?: number, offset?: number): Promise<IAPIResourceList>;
  public async getList(endpoint: TPokeAPIEndpoint, limit?: number, offset?: number): Promise<IAPIResourceList | INamedAPIResourceList> {
    const url: string = this._constructListUrl(endpoint, limit, offset);

    return request(url)
      .then((value: any) => {
        const json: any = JSON.parse(value);

        // TODO: is this logic necessary?
        if (this._listIsNamed(json)) {
          return json as INamedAPIResourceList;
        } else {
          return json as IAPIResourceList;
        }
      })
      .catch((reason: any) => {
        return reason; // TODO: test errors
      });
  }

  protected _constructListUrl(endpoint: string, limit?: number, offset?: number): string {
    let route: string = `/api/${PokeAPI._API_VERSION}/${endpoint}/`;

    if (this._isNumber(limit)) {
      route += `?limit=${limit}`;

      if (this._isNumber(offset)) {
        route += `&offset=${offset}`;
      }
    }

    const url: URL = new URL(route, PokeAPI._BASE);

    return url.href;
  }

  protected _constructUrl(endpoint: string, filter: number | string): string {
    const url: URL = new URL(`/api/${PokeAPI._API_VERSION}/${endpoint}/${filter}/`, PokeAPI._BASE);

    return url.href;
  }

  protected _isNumber(value: any): value is number {
    return typeof value === 'number';
  }

  protected _listIsNamed(list: IAPIResourceList | INamedAPIResourceList): list is INamedAPIResourceList {
    if (list.results.length > 0) {
      return (list as INamedAPIResourceList).results[0].name !== undefined;
    } else {
      return false;
    }
  }
}
