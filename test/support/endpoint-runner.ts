import { expect } from 'chai';

import { PokeAPI } from '../../src/index';
import {
  IAPIResource,
  IAPIResourceList,
  INamedAPIResource,
  INamedAPIResourceList,
  INamedPokeAPIResource,
  IPokeAPIResource,
  TPokeAPIEndpoint,
} from '../../src/interfaces';
import { isListNamed } from '../../src/util';

import { isStringOrNull } from './type-guards';

export function endpointRunner<T extends IPokeAPIResource | INamedPokeAPIResource>(endpoint: TPokeAPIEndpoint, itemTests: (resource: T) => void): void {
  describe(`${endpoint}`, (): void => {
    const pokeapi: PokeAPI = new PokeAPI();
    let list: IAPIResourceList | INamedAPIResourceList | undefined;

    it(`gets a list of ${endpoint} resources`, async (): Promise<void> => {
      list = await pokeapi.getList(endpoint as any, 1000, 0); // TODO: Remove 'any' check after 'get' method is fully populated with TPokeAPIEndpoint names

      expect(list.count).to.be.a('number');
      expect(list.count).to.be.greaterThan(0);
      expect(list.next).to.satisfy(isStringOrNull);
      expect(list.previous).to.satisfy(isStringOrNull);

      if (isListNamed(list)) {
        expect(list.results[0].name).to.be.a('string');
      }

      expect(list.results[0].url).to.be.a('string');
    });

    it(`gets a ${endpoint} by id`, async (): Promise<void> => {
      if (list) {
        const randomIndex: number = Math.floor(Math.random() * (Math.floor(list.count - 1) + 1));
        const result: IAPIResource | INamedAPIResource = list.results[randomIndex];
        const urlParts: string[] = result.url.split('/');
        const id: number = Number(urlParts[urlParts.length - 2]);
        const output: any = await pokeapi.get(endpoint as any, id); // TODO: Remove 'any' check after 'get' method is fully populated with TPokeAPIEndpoint names

        expect(output.id).to.equal(id);

        if (isListNamed(list)) {
          expect(output.name).to.equal(list.results[randomIndex].name);
        }

        itemTests(output);
      } else {
        throw new Error('list not found');
      }
    });

    it(`gets a ${endpoint} by name`, async function(): Promise<void> {
      if (list) {
        if (isListNamed(list)) {
          const randomIndex: number = Math.floor(Math.random() * (Math.floor(list.count - 1) + 1));
          const result: IAPIResource | INamedAPIResource = list.results[randomIndex];
          const urlParts: string[] = result.url.split('/');
          const id: number = Number(urlParts[urlParts.length - 2]);
          const name: string = (result as INamedAPIResource).name;
          const output: any = await pokeapi.get(endpoint as any, name); // TODO: Remove 'any' check after 'get' method is fully populated with TPokeAPIEndpoint names

          expect(output.id).to.equal(id);
          expect(output.name).to.equal(list.results[randomIndex].name);

          itemTests(output);
        } else {
          this.skip();
        }
      } else {
        throw new Error('list not found');
      }
    });
  });
}
