import { expect } from 'chai';
import { PokeAPIPublic } from './support/pokeapi-public';

describe('pokeapi', (): void => {
  const pokeapi = new PokeAPIPublic();

  describe('constructUrl', (): void => {
    it('returns valid URL with no filter', (): void => {
      const endpoint = 'test-name';
      const output = pokeapi.constructUrl(endpoint);

      expect(output).to.equal(`${PokeAPIPublic.BASE}/api/${PokeAPIPublic.API_VERSION}/${endpoint}/`);
    });

    it('returns valid URL with filter', (): void => {
      const endpoint = 'test-name';
      const filter = 'test-filter';
      const output = pokeapi.constructUrl(endpoint, filter);

      expect(output).to.equal(`${PokeAPIPublic.BASE}/api/${PokeAPIPublic.API_VERSION}/${endpoint}/${filter}/`);
    });
  });
});
