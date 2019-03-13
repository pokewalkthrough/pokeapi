import { expect } from 'chai';

import { isNumberArray } from '../type-guards';
import { ICharacteristic } from '../../../src/types';

export function characteristicTests(characteristic: ICharacteristic): void {
  expect(characteristic.gene_modulo).to.be.a('number');
  expect(characteristic.possible_values).to.satisfy(isNumberArray);
}
