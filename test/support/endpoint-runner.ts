import { expect } from 'chai';
import fs from 'fs';

import { IAPIResourceList, INamedAPIResourceList, INamedPokeAPIResource, IPokeAPIResource, TPokeAPIEndpoint } from '../../src/interfaces';

import { isAPIResource, isNamedAPIResource, isStringOrNull } from './type-guards';

// TODO: Run each endpoint once (for real) to ensure connectivity to endpoints
// TODO: Check for the existence of extra/unexpected properties?
export function endpointRunner<T extends IPokeAPIResource | INamedPokeAPIResource>(
  endpoint: TPokeAPIEndpoint,
  itemTests: (resource: T) => void,
  listIsNamed: boolean,
): void {
  describe(`${endpoint}`, (): void => {
    let list: IAPIResourceList | INamedAPIResourceList | undefined;
    let item: T | undefined;

    before(
      async (): Promise<void> => {
        list = JSON.parse((await fs.promises.readFile(`./test/resources/${endpoint}-list.json`)).toString());
        item = JSON.parse((await fs.promises.readFile(`./test/resources/${endpoint}-item.json`)).toString());
      },
    );

    it('list has expected properties', async (): Promise<void> => {
      if (list) {
        expect(list.count).to.be.a('number');
        expect(list.count).to.be.greaterThan(0);
        expect(list.next).to.satisfy(isStringOrNull);
        expect(list.previous).to.satisfy(isStringOrNull);

        for (const result of list.results) {
          if (listIsNamed) {
            expect(result).to.satisfy(isNamedAPIResource);
          } else {
            expect(result).to.satisfy(isAPIResource);
          }

          expect(result.url).to.be.a('string');
        }
      }
    });

    it('list has no unexpected properties', async (): Promise<void> => {
      if (list) {
        const keys: string[] = Object.keys(list);
        const expectedKeys: string[] = ['count', 'next', 'previous', 'results'];
        const expectedNamedResultKeys: string[] = ['name', 'url'];
        const expectedResultKeys: string[] = ['url'];

        for (const key of keys) {
          expect(expectedKeys.includes(key)).to.equal(true);
        }

        for (const result of list.results) {
          const resultsKeys: string[] = Object.keys(result);

          for (const key of resultsKeys) {
            if (listIsNamed) {
              expect(expectedNamedResultKeys.includes(key)).to.equal(true);
            } else {
              expect(expectedResultKeys.includes(key)).to.equal(true);
            }
          }
        }
      }
    });

    it('item has expected properties', async (): Promise<void> => {
      if (item) {
        expect(item.id).to.be.a('number');

        if (listIsNamed) {
          expect((item as INamedPokeAPIResource).name).to.be.a('string');
        }
        // TODO: insert else clause here:
        /*
          expect((item as IAPIResourceList).name.to.not.exist.or.something?
        */

        itemTests(item);
      }
    });
  });
}
