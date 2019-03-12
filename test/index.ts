import { expect } from 'chai';

import { IAPIResourceList, INamedAPIResourceList } from '../src/interfaces';
import { API_VERSION, BASE, constructListUrl, constructUrl, isListNamed, isNumber } from '../src/util';

import { endpointRunner } from './support/endpoint-runner';
import {
  berryFirmnessTests,
  berryFlavorTests,
  berryTests,
  contestEffectTests,
  contestTypeTests,
  encounterConditionTests,
  encounterConditionValueTests,
  encounterMethodTests,
  evolutionChainTests,
  evolutionTriggerTests,
  generationTests,
  itemAttributeTests,
  itemCategoryTests,
  itemFlingEffectTests,
  itemPocketTests,
  itemTests,
  locationAreaTests,
  locationTests,
  machineTests,
  moveAilmentTests,
  moveBattleStyleTests,
  moveCategoryTests,
  moveDamageClassTests,
  moveLearnMethodTests,
  moveTargetTests,
  moveTests,
  palParkAreaTests,
  pokedexTests,
  regionTests,
  superContestEffectTests,
  versionGroupTests,
  versionTests,
} from './support/endpoints';

describe('util', (): void => {
  describe('constructListUrl', (): void => {
    it('returns URL with no limit or offset', (): void => {
      const endpoint: string = 'test-name';
      const output: string = constructListUrl(endpoint);

      expect(output).to.equal(`${BASE}/api/${API_VERSION}/${endpoint}/`);
    });

    it('returns URL with limit and no offset', (): void => {
      const endpoint: string = 'test-name';
      const limit: number = 30;
      const output: string = constructListUrl(endpoint, limit);

      expect(output).to.equal(`${BASE}/api/${API_VERSION}/${endpoint}/?limit=${limit}`);
    });

    it('returns URL with limit and offset', (): void => {
      const endpoint: string = 'test-name';
      const limit: number = 30;
      const offset: number = 30;
      const output: string = constructListUrl(endpoint, limit, offset);

      expect(output).to.equal(`${BASE}/api/${API_VERSION}/${endpoint}/?limit=${limit}&offset=${offset}`);
    });
  });

  describe('constructUrl', (): void => {
    it('returns URL with number filter', (): void => {
      const endpoint: string = 'test-name';
      const filter: number = 10;
      const output: string = constructUrl(endpoint, filter);

      expect(output).to.equal(`${BASE}/api/${API_VERSION}/${endpoint}/${filter}/`);
    });

    it('returns URL with string filter', (): void => {
      const endpoint: string = 'test-name';
      const filter: string = 'test-filter';
      const output: string = constructUrl(endpoint, filter);

      expect(output).to.equal(`${BASE}/api/${API_VERSION}/${endpoint}/${filter}/`);
    });
  });

  describe('isListNamed', (): void => {
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

      const output: boolean = isListNamed(list);

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

      const output: boolean = isListNamed(list);

      expect(output).to.equal(false);
    });

    it('returns false if list is empty', (): void => {
      const list: IAPIResourceList = {
        count: 1,
        next: '',
        previous: '',
        results: [],
      };

      const output: boolean = isListNamed(list);

      expect(output).to.equal(false);
    });
  });

  describe('isNumber', (): void => {
    it('returns true if value is a number', (): void => {
      const output: boolean = isNumber(0);

      expect(output).to.equal(true);
    });

    it('returns false if value is not a number', (): void => {
      const output: boolean = isNumber('hello');

      expect(output).to.equal(false);
    });
  });
});

endpointRunner('berry', berryTests, true);
endpointRunner('berry-firmness', berryFirmnessTests, true);
endpointRunner('berry-flavor', berryFlavorTests, true);
endpointRunner('contest-type', contestTypeTests, true);
endpointRunner('contest-effect', contestEffectTests, false);
endpointRunner('super-contest-effect', superContestEffectTests, false);
endpointRunner('encounter-method', encounterMethodTests, true);
endpointRunner('encounter-condition', encounterConditionTests, true);
endpointRunner('encounter-condition-value', encounterConditionValueTests, true);
endpointRunner('evolution-chain', evolutionChainTests, false);
endpointRunner('evolution-trigger', evolutionTriggerTests, true);
endpointRunner('generation', generationTests, true);
endpointRunner('pokedex', pokedexTests, true);
endpointRunner('version', versionTests, true);
endpointRunner('version-group', versionGroupTests, true);
endpointRunner('item', itemTests, true);
endpointRunner('item-attribute', itemAttributeTests, true);
endpointRunner('item-category', itemCategoryTests, true);
endpointRunner('item-fling-effect', itemFlingEffectTests, true);
endpointRunner('item-pocket', itemPocketTests, true);
endpointRunner('location', locationTests, true);
endpointRunner('location-area', locationAreaTests, true);
endpointRunner('pal-park-area', palParkAreaTests, true);
endpointRunner('region', regionTests, true);
endpointRunner('machine', machineTests, false);
endpointRunner('move', moveTests, true);
endpointRunner('move-ailment', moveAilmentTests, true);
endpointRunner('move-battle-style', moveBattleStyleTests, true);
endpointRunner('move-category', moveCategoryTests, true);
endpointRunner('move-damage-class', moveDamageClassTests, true);
endpointRunner('move-learn-method', moveLearnMethodTests, true);
endpointRunner('move-target', moveTargetTests, true);
