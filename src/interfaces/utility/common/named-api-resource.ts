import { IAPIResource } from './api-resource';

export interface INamedAPIResource extends IAPIResource {
  /**
   * The name of the referenced resource.
   */
  name: string;
}
