import { expect } from 'chai';
import fs from 'fs';

import {
  IAPIResource,
  IAPIResourceList,
  INamedAPIResource,
  INamedAPIResourceList,
  INamedPokeAPIResource,
  IPokeAPIResource,
  TPokeAPIEndpoint,
} from '../../src/interfaces';

// TODO: Run each endpoint once (for real) to ensure connectivity to endpoints
// TODO: Check for the existence of extra/unexpected properties?  Check out Chai's `keys`
// TODO: Infer listIsNamed property?  Do I really need to pass this in?
export function endpointRunner<T extends IPokeAPIResource | INamedPokeAPIResource>(
  endpoint: TPokeAPIEndpoint,
  itemTests: (resource: T) => void,
  listIsNamed: boolean,
): void {
  describe(`${endpoint}`, (): void => {
    let item: T | undefined;
    let list: IAPIResourceList | INamedAPIResourceList | undefined;

    before(
      async (): Promise<void> => {
        item = JSON.parse((await fs.promises.readFile(`./test/resources/${endpoint}-item.json`)).toString());
        list = JSON.parse((await fs.promises.readFile(`./test/resources/${endpoint}-list.json`)).toString());
      },
    );

    it('list has expected properties and no unexpected properties', (): void => {
      if (list) {
        expect(list)
          .to.be.an('object')
          .and.to.have.keys(['count', 'next', 'previous', 'results']);

        expect(list.count)
          .to.be.a('number')
          .and.to.be.greaterThan(0);

        expect(list.next).to.be.oneOf(['string', null]);
        expect(list.previous).to.be.oneOf(['string', null]);

        list.results.forEach((result: IAPIResource | INamedAPIResource) => {
          if (listIsNamed) {
            expect(result)
              .to.be.an('object')
              .and.to.have.keys(['name', 'url']);

            expect((result as INamedAPIResource).name).to.be.a('string');
            expect(result.url).to.be.a('string');
          } else {
            expect(result)
              .to.be.an('object')
              .to.have.keys(['url']);

            expect(result as IAPIResource).to.not.haveOwnProperty('name');
            expect(result.url).to.be.a('string');
          }
        });
      } else {
        throw new Error(`Cannot find list for endpoint: '${endpoint}'`);
      }
    });

    it('item has expected properties and no unexpected properties', (): void => {
      if (item) {
        itemTests(item);
      } else {
        throw new Error(`Cannot find item for endpoint: '${endpoint}'`);
      }
    });
  });
}
