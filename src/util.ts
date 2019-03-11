import { IAPIResourceList, INamedAPIResourceList } from './interfaces';

export const API_VERSION: string = 'v2';
export const BASE: string = 'https://pokeapi.co';

export function constructListUrl(endpoint: string, limit?: number, offset?: number): string {
  let route: string = `/api/${API_VERSION}/${endpoint}/`;

  if (isNumber(limit)) {
    route += `?limit=${limit}`;

    if (isNumber(offset)) {
      route += `&offset=${offset}`;
    }
  }

  const url: URL = new URL(route, BASE);

  return url.href;
}

export function constructUrl(endpoint: string, filter: number | string): string {
  const url: URL = new URL(`/api/${API_VERSION}/${endpoint}/${filter}/`, BASE);

  return url.href;
}

export function isListNamed(list: IAPIResourceList | INamedAPIResourceList): list is INamedAPIResourceList {
  if (list.results.length > 0) {
    return (list as INamedAPIResourceList).results[0].name !== undefined;
  } else {
    return false;
  }
}

export function isNumber(value: any): value is number {
  return typeof value === 'number';
}
