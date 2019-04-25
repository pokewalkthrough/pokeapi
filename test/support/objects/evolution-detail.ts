import { expect } from 'chai';

import { IEvolutionDetail } from '../../../src/interfaces';
import { booleanTest, numberTest, stringTest } from '../primitives';

import { namedAPIResourceTest } from './named-api-resource';

export function evolutionDetailTest(...args: IEvolutionDetail[]): void {
  args.forEach(
    (evolutionDetail: IEvolutionDetail): void => {
      expect(evolutionDetail)
        .to.be.an('object')
        .and.to.have.keys([
          'gender',
          'held_item',
          'item',
          'known_move',
          'known_move_type',
          'location',
          'min_affection',
          'min_beauty',
          'min_happiness',
          'min_level',
          'needs_overworld_rain',
          'party_species',
          'party_type',
          'relative_physical_stats',
          'time_of_day',
          'trade_species',
          'trigger',
          'turn_upside_down',
        ]);

      booleanTest(evolutionDetail.needs_overworld_rain, evolutionDetail.turn_upside_down);
      namedAPIResourceTest(false, evolutionDetail.trigger);
      namedAPIResourceTest(
        true,
        evolutionDetail.item,
        evolutionDetail.held_item,
        evolutionDetail.known_move,
        evolutionDetail.known_move_type,
        evolutionDetail.location,
        evolutionDetail.party_species,
        evolutionDetail.party_type,
        evolutionDetail.trade_species,
      );
      numberTest(
        true,
        evolutionDetail.gender,
        evolutionDetail.min_level,
        evolutionDetail.min_happiness,
        evolutionDetail.min_beauty,
        evolutionDetail.min_affection,
        evolutionDetail.relative_physical_stats,
      );
      stringTest(false, evolutionDetail.time_of_day);
    },
  );
}
