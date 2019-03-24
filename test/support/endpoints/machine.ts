import { expect } from 'chai';

import { IMachine } from '../../../src/interfaces';
import { isNamedAPIResource } from '../type-guards';

export function machineTests(machine: IMachine): void {
  expect(machine.item).to.satisfy(isNamedAPIResource);
  expect(machine.move).to.satisfy(isNamedAPIResource);
  expect(machine.version_group).to.satisfy(isNamedAPIResource);
}
