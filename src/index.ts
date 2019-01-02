import request from 'request-promise-native';

import { IAPIResourceList, IBerry, IBerryFirmness, IBerryFlavor, IContestType, INamedAPIResourceList, IPokeAPIResource, TPokeAPIEndpoint } from './interfaces';

export class PokeAPI {
  protected static _API_VERSION: string = 'v2';
  protected static _BASE: string = 'https://pokeapi.co';

  public async get<T extends IBerry>(endpoint: 'berry'): Promise<INamedAPIResourceList>;
  public async get<T extends IBerry>(endpoint: 'berry', filter: number | string): Promise<T>;
  public async get<T extends IBerryFirmness>(endpoint: 'berry-firmness'): Promise<INamedAPIResourceList>;
  public async get<T extends IBerryFirmness>(endpoint: 'berry-firmness', filter: number | string): Promise<T>;
  public async get<T extends IBerryFlavor>(endpoint: 'berry-flavor'): Promise<INamedAPIResourceList>;
  public async get<T extends IBerryFlavor>(endpoint: 'berry-flavor', filter: number | string): Promise<T>;
  public async get<T extends IContestType>(endpoint: 'contest-type'): Promise<INamedAPIResourceList>;
  public async get<T extends IContestType>(endpoint: 'contest-type', filter: number | string): Promise<T>;
  public async get<T extends IContestType>(endpoint: 'contest-effect'): Promise<IAPIResourceList>;
  public async get<T extends IContestType>(endpoint: 'contest-effect', filter: number): Promise<T>;
  public async get<T extends IPokeAPIResource>(endpoint: TPokeAPIEndpoint, filter?: number | string): Promise<T | IAPIResourceList | INamedAPIResourceList> {
    const url: string = this._constructUrl(endpoint, filter);

    return request(url)
      .then((value: any) => {
        const json: any = JSON.parse(value);

        if (filter) {
          return json as T;
        } else {
          if (this._listIsNamed(json)) {
            return json as INamedAPIResourceList;
          } else {
            return json as IAPIResourceList;
          }
        }
      })
      .catch((reason: any) => {
        return reason;
      });
  }

  protected _constructUrl(endpoint: string, filter?: number | string): string {
    const url: URL = new URL(`/api/${PokeAPI._API_VERSION}/${endpoint}/${filter ? `${filter}/` : ''}`, PokeAPI._BASE);

    return url.href;
  }

  protected _listIsNamed(list: IAPIResourceList | INamedAPIResourceList): list is INamedAPIResourceList {
    if (list.results.length > 0) {
      return (list as INamedAPIResourceList).results[0].name !== undefined;
    } else {
      return false;
    }
  }
}
