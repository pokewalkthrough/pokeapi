import { expect } from 'chai';
import fs from 'fs';

import { IAPIResourceList, INamedAPIResourceList } from '../../src/interfaces';
import { INamedPokeAPIResource, IPokeAPIResource, TPokeAPIEndpoint } from '../../src/types';

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
        expect(list.next).to.be.oneOf(['string', null]);
        expect(list.previous).to.be.oneOf(['string', null]);

        if (listIsNamed) {
          expect((list as INamedAPIResourceList).results[0].name).to.be.a('string');
        }
        // TODO: insert else clause here:
        /*
          expect((list as IAPIResourceList).results[0].name.to.not.exist.or.something?
        */

        expect(list.results[0].url).to.be.a('string');
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
