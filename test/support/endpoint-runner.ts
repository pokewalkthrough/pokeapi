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

import { apiResourceTest, namedAPIResourceTest } from './objects';
import { numberTest, stringTest } from './primitives';

// TODO: Run each endpoint once (for real) to ensure connectivity to endpoints
export function endpointRunner<T extends IPokeAPIResource | INamedPokeAPIResource>(endpoint: TPokeAPIEndpoint, itemTests: (resource: T) => void): void {
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

        numberTest(list.count);
        stringTest(true, list.next, list.previous);

        if (isListNamed(list)) {
          namedAPIResourceTest(...list.results);
        } else {
          apiResourceTest(...list.results);
        }
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

function isListNamed(list: IAPIResourceList | INamedAPIResourceList): list is INamedAPIResourceList {
  let hasName: boolean = false;

  if (list.results.length > 0 && isResourceNamed(list.results[0])) {
    hasName = true;
  }

  return hasName;
}

function isResourceNamed(value: IAPIResource | INamedAPIResource): value is INamedAPIResource {
  return value.hasOwnProperty('name');
}
