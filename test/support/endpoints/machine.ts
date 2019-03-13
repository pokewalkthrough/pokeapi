import { expect } from 'chai';

import { isNamedAPIResource } from '../type-guards';
import { IMachine } from '../../../src/types';

export function machineTests(machine: IMachine): void {
  expect(machine.item).to.satisfy(isNamedAPIResource);
  expect(machine.move).to.satisfy(isNamedAPIResource);
  expect(machine.version_group).to.satisfy(isNamedAPIResource);
}
