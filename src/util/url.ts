export const API_VERSION: string = 'v2';
export const BASE: string = 'https://pokeapi.co';

export function constructListUrl(endpoint: string, limit?: number, offset?: number): string {
  let route: string = `/api/${API_VERSION}/${endpoint}/`;

  if (typeof limit === 'number') {
    route += `?limit=${limit}`;

    if (typeof offset === 'number') {
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
