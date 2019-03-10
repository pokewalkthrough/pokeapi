import { expect } from 'chai';

import { IAPIResourceList, INamedAPIResourceList } from '../src/interfaces';

import { endpointRunner } from './support/endpoint-runner';
import { berryFirmnessTests, berryFlavorTests, berryTests, contestEffectTests, contestTypeTests, superContestEffectTests } from './support/endpoints';
import { PokeAPIPublic } from './support/pokeapi-public';

describe('internal methods', (): void => {
  const pokeapi: PokeAPIPublic = new PokeAPIPublic();

  describe('_constructListUrl', (): void => {
    it('returns URL with no limit or offset', (): void => {
      const endpoint: string = 'test-name';
      const output: string = pokeapi.constructListUrl(endpoint);

      expect(output).to.equal(`${PokeAPIPublic.BASE}/api/${PokeAPIPublic.API_VERSION}/${endpoint}/`);
    });

    it('returns URL with limit and no offset', (): void => {
      const endpoint: string = 'test-name';
      const limit: number = 30;
      const output: string = pokeapi.constructListUrl(endpoint, limit);

      expect(output).to.equal(`${PokeAPIPublic.BASE}/api/${PokeAPIPublic.API_VERSION}/${endpoint}/?limit=${limit}`);
    });

    it('returns URL with limit and offset', (): void => {
      const endpoint: string = 'test-name';
      const limit: number = 30;
      const offset: number = 30;
      const output: string = pokeapi.constructListUrl(endpoint, limit, offset);

      expect(output).to.equal(`${PokeAPIPublic.BASE}/api/${PokeAPIPublic.API_VERSION}/${endpoint}/?limit=${limit}&offset=${offset}`);
    });
  });

  describe('_constructUrl', (): void => {
    it('returns URL with number filter', (): void => {
      const endpoint: string = 'test-name';
      const filter: number = 10;
      const output: string = pokeapi.constructUrl(endpoint, filter);

      expect(output).to.equal(`${PokeAPIPublic.BASE}/api/${PokeAPIPublic.API_VERSION}/${endpoint}/${filter}/`);
    });

    it('returns URL with string filter', (): void => {
      const endpoint: string = 'test-name';
      const filter: string = 'test-filter';
      const output: string = pokeapi.constructUrl(endpoint, filter);

      expect(output).to.equal(`${PokeAPIPublic.BASE}/api/${PokeAPIPublic.API_VERSION}/${endpoint}/${filter}/`);
    });
  });

  describe('_isNumber', (): void => {
    it('returns true if value is a number', (): void => {
      const output: boolean = pokeapi.isNumber(0);

      expect(output).to.equal(true);
    });

    it('returns false if value is not a number', (): void => {
      const output: boolean = pokeapi.isNumber('hello');

      expect(output).to.equal(false);
    });
  });

  describe('_isListNamed', (): void => {
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

      const output: boolean = pokeapi.isListNamed(list);

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

      const output: boolean = pokeapi.isListNamed(list);

      expect(output).to.equal(false);
    });

    it('returns false if list is empty', (): void => {
      const list: IAPIResourceList = {
        count: 1,
        next: '',
        previous: '',
        results: [],
      };

      const output: boolean = pokeapi.isListNamed(list);

      expect(output).to.equal(false);
    });
  });
});

endpointRunner('berry', berryTests);
endpointRunner('berry-firmness', berryFirmnessTests);
endpointRunner('berry-flavor', berryFlavorTests);
endpointRunner('contest-type', contestTypeTests);
endpointRunner('contest-effect', contestEffectTests);
endpointRunner('super-contest-effect', superContestEffectTests);
