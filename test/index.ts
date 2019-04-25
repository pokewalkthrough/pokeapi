import { expect } from 'chai';

import { API_VERSION, BASE, constructListUrl, constructUrl } from '../src/util';

import { endpointRunner } from './support/endpoint-runner';
import {
  abilityTests,
  berryFirmnessTest,
  berryFlavorTest,
  berryTest,
  characteristicTests,
  contestEffectTests,
  contestTypeTest,
  eggGroupTests,
  encounterConditionTests,
  encounterConditionValueTests,
  encounterMethodTests,
  evolutionChainTests,
  evolutionTriggerTests,
  genderTests,
  generationTests,
  growthRateTests,
  itemAttributeTests,
  itemCategoryTests,
  itemFlingEffectTests,
  itemPocketTests,
  itemTests,
  languageTests,
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
  natureTests,
  palParkAreaTests,
  pokeathlonStatTests,
  pokedexTests,
  pokemonColorTests,
  pokemonFormTests,
  pokemonHabitatTests,
  pokemonShapeTests,
  pokemonSpeciesTests,
  pokemonTests,
  regionTests,
  statTests,
  superContestEffectTests,
  typeTests,
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
});

endpointRunner('berry', berryTest);
endpointRunner('berry-firmness', berryFirmnessTest);
endpointRunner('berry-flavor', berryFlavorTest);
endpointRunner('contest-type', contestTypeTest);
endpointRunner('contest-effect', contestEffectTests);
endpointRunner('super-contest-effect', superContestEffectTests);
endpointRunner('encounter-method', encounterMethodTests);
endpointRunner('encounter-condition', encounterConditionTests);
endpointRunner('encounter-condition-value', encounterConditionValueTests);
endpointRunner('evolution-chain', evolutionChainTests);
endpointRunner('evolution-trigger', evolutionTriggerTests);
endpointRunner('generation', generationTests);
endpointRunner('pokedex', pokedexTests);
endpointRunner('version', versionTests);
endpointRunner('version-group', versionGroupTests);
endpointRunner('item', itemTests);
endpointRunner('item-attribute', itemAttributeTests);
endpointRunner('item-category', itemCategoryTests);
endpointRunner('item-fling-effect', itemFlingEffectTests);
endpointRunner('item-pocket', itemPocketTests);
endpointRunner('location', locationTests);
endpointRunner('location-area', locationAreaTests);
endpointRunner('pal-park-area', palParkAreaTests);
endpointRunner('region', regionTests);
endpointRunner('machine', machineTests);
endpointRunner('move', moveTests);
endpointRunner('move-ailment', moveAilmentTests);
endpointRunner('move-battle-style', moveBattleStyleTests);
endpointRunner('move-category', moveCategoryTests);
endpointRunner('move-damage-class', moveDamageClassTests);
endpointRunner('move-learn-method', moveLearnMethodTests);
endpointRunner('move-target', moveTargetTests);
endpointRunner('ability', abilityTests);
endpointRunner('characteristic', characteristicTests);
endpointRunner('egg-group', eggGroupTests);
endpointRunner('gender', genderTests);
endpointRunner('growth-rate', growthRateTests);
endpointRunner('nature', natureTests);
endpointRunner('pokeathlon-stat', pokeathlonStatTests);
endpointRunner('pokemon', pokemonTests);
endpointRunner('pokemon-color', pokemonColorTests);
endpointRunner('pokemon-form', pokemonFormTests);
endpointRunner('pokemon-habitat', pokemonHabitatTests);
endpointRunner('pokemon-shape', pokemonShapeTests);
endpointRunner('pokemon-species', pokemonSpeciesTests);
endpointRunner('stat', statTests);
endpointRunner('type', typeTests);
endpointRunner('language', languageTests);
