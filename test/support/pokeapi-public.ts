import { IAPIResourceList, INamedAPIResourceList } from '../../src/interfaces';
import { PokeAPI } from '../../src';

export class PokeAPIPublic extends PokeAPI {
  public static API_VERSION: string = PokeAPIPublic._API_VERSION;
  public static BASE: string = PokeAPIPublic._BASE;

  public constructUrl(endpoint: string, filter?: number | string): string {
    return this._constructUrl(endpoint, filter);
  }

  public listIsNamed(list: IAPIResourceList | INamedAPIResourceList): list is INamedAPIResourceList {
    return this._listIsNamed(list);
  }
}
