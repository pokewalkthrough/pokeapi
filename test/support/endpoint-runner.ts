import { expect } from 'chai';
import { IAPIResource, IAPIResourceList, INamedAPIResource, INamedAPIResourceList, IPokeAPIResource, TPokeAPIEndpoint } from '../../src/interfaces';
import { PokeAPIPublic } from '../support/pokeapi-public';
import { isStringOrNull } from './type-guards';

export function endpointRunner<T extends IPokeAPIResource>(endpoint: TPokeAPIEndpoint, itemTests: (resource: T) => void) {
  describe(`${endpoint}`, (): void => {
    const pokeapi: PokeAPIPublic = new PokeAPIPublic();
    let list: IAPIResourceList | INamedAPIResourceList | undefined;

    it(`gets a list of ${endpoint} resources`, async (): Promise<void> => {
      list = await pokeapi.get(endpoint as any); // TODO: Remove 'any' check after 'get' method is fully populated with TPokeAPIEndpoint names

      expect(list.count).to.be.a('number');
      expect(list.count).to.be.greaterThan(0);
      expect(list.next).to.satisfy(isStringOrNull);
      expect(list.previous).to.satisfy(isStringOrNull);

      if (pokeapi.listIsNamed(list)) {
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
        const output = await pokeapi.get(endpoint as any, id); // TODO: Remove 'any' check after 'get' method is fully populated with TPokeAPIEndpoint names

        expect(output.id).to.equal(id);

        if (pokeapi.listIsNamed(list)) {
          expect(output.name).to.equal(list.results[randomIndex].name);
        }

        itemTests(output as any); // TODO: Remove 'any' check after 'get' method is fully populated with TPokeAPIEndpoint names
      }
    });

    it(`gets a ${endpoint} by name`, async (): Promise<void> => {
      if (list) {
        const randomIndex: number = Math.floor(Math.random() * (Math.floor(list.count - 1) + 1));
        const result: IAPIResource | INamedAPIResource = list.results[randomIndex];
        const urlParts: string[] = result.url.split('/');
        const id: number = Number(urlParts[urlParts.length - 2]);
        const name: string | null = pokeapi.listIsNamed(list) ? (result as INamedAPIResource).name : '';
        const output = await pokeapi.get(endpoint as any, name); // TODO: Remove 'any' check after 'get' method is fully populated with TPokeAPIEndpoint names

        expect(output.id).to.equal(id);

        if (pokeapi.listIsNamed(list)) {
          expect(output.name).to.equal(list.results[randomIndex].name);
        }

        itemTests(output as any); // TODO: Remove 'any' check after 'get' method is fully populated with TPokeAPIEndpoint names
      }
    });
  });
}
