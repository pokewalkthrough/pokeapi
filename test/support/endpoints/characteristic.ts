import { expect } from 'chai';

import { ICharacteristic } from '../../../src/interfaces';
import { isNumberArray } from '../type-guards';

export function characteristicTests(characteristic: ICharacteristic): void {
  expect(characteristic.gene_modulo).to.be.a('number');
  expect(characteristic.possible_values).to.satisfy(isNumberArray);
}
