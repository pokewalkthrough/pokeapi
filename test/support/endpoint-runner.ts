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

// TODO: Download JSON documents first, so they don't have to download during every test.  Update these docs every 4 hours, or on-demand.
// TODO: Make it possible to choose a specific ID or Name instead of it being random
// TODO: Somehow display which ID and/or Name is being tested
export function endpointRunner<T extends IPokeAPIResource | INamedPokeAPIResource>(
  endpoint: TPokeAPIEndpoint,
  itemTests: (resource: T) => void,
  listIsNamed: boolean,
): void {
  describe(`${endpoint}`, (): void => {
    const pokeapi: PokeAPI = new PokeAPI();
    let list: IAPIResourceList | INamedAPIResourceList | undefined;

    it(`gets a list of ${endpoint} resources`, async (): Promise<void> => {
      list = await pokeapi.getList(endpoint as any, 1000, 0); // TODO: Remove 'any' check after 'get' method is fully populated with TPokeAPIEndpoint names

      expect(list.count).to.be.a('number');
      expect(list.count).to.be.greaterThan(0);
      expect(list.next).to.be.oneOf(['string', null]);
      expect(list.previous).to.be.oneOf(['string', null]);

      if (listIsNamed) {
        expect((list as INamedAPIResourceList).results[0].name).to.be.a('string');
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

        if (listIsNamed) {
          expect(output.name).to.equal((list as INamedAPIResourceList).results[randomIndex].name);
        }

        itemTests(output);
      } else {
        throw new Error('list not found');
      }
    });

    if (listIsNamed) {
      it(`gets a ${endpoint} by name`, async (): Promise<void> => {
        if (list) {
          const randomIndex: number = Math.floor(Math.random() * (Math.floor(list.count - 1) + 1));
          const result: IAPIResource | INamedAPIResource = list.results[randomIndex];
          const urlParts: string[] = result.url.split('/');
          const id: number = Number(urlParts[urlParts.length - 2]);
          const name: string = (result as INamedAPIResource).name;
          const output: any = await pokeapi.get(endpoint as any, name); // TODO: Remove 'any' check after 'get' method is fully populated with TPokeAPIEndpoint names

          expect(output.id).to.equal(id);
          expect(output.name).to.equal((list as INamedAPIResourceList).results[randomIndex].name);

          itemTests(output);
        } else {
          throw new Error('list not found');
        }
      });
    }
  });
}
