import { expect } from 'chai';
import { endpointRunner } from './support/endpoint-runner';
import { IAPIResourceList, INamedAPIResourceList } from '../src/interfaces';
import { PokeAPIPublic } from './support/pokeapi-public';

describe('internal methods', (): void => {
  const pokeapi = new PokeAPIPublic();

  describe('_constructUrl', (): void => {
    it('returns URL with no filter', (): void => {
      const endpoint = 'test-name';
      const output = pokeapi.constructUrl(endpoint);

      expect(output).to.equal(`${PokeAPIPublic.BASE}/api/${PokeAPIPublic.API_VERSION}/${endpoint}/`);
    });

    it('returns URL with filter', (): void => {
      const endpoint = 'test-name';
      const filter = 'test-filter';
      const output = pokeapi.constructUrl(endpoint, filter);

      expect(output).to.equal(`${PokeAPIPublic.BASE}/api/${PokeAPIPublic.API_VERSION}/${endpoint}/${filter}/`);
    });
  });

  describe('_listIsNamed', (): void => {
    it('returns true if list is named', (): void => {
      const list: INamedAPIResourceList = {
        count: 1,
        next: '',
        previous: '',
        results: [
          {
            name: 'test-name',
            url: 'test-url',
          },
        ],
      };

      const output: boolean = pokeapi.listIsNamed(list);

      expect(output).to.equal(true);
    });

    it('returns false if list is not named', (): void => {
      const list: IAPIResourceList = {
        count: 1,
        next: '',
        previous: '',
        results: [
          {
            url: 'test-url',
          },
        ],
      };

      const output: boolean = pokeapi.listIsNamed(list);

      expect(output).to.equal(false);
    });
  });
});

endpointRunner('berry');
