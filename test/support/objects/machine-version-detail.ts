import { expect } from 'chai';

import { IMachineVersionDetail } from '../../../src/interfaces';

import { apiResourceTest } from './api-resource';
import { namedAPIResourceTest } from './named-api-resource';

export function machineVersionDetailTest(...args: IMachineVersionDetail[]): void {
  args.forEach(
    (machineVersionDetail: IMachineVersionDetail): void => {
      expect(machineVersionDetail)
        .to.be.an('object')
        .and.to.have.keys(['machine', 'version_group']);

      apiResourceTest(false, machineVersionDetail.machine);
      namedAPIResourceTest(false, machineVersionDetail.version_group);
    },
  );
}
