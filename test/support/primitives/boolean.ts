import { expect } from 'chai';

export function booleanTest(...args: boolean[]): void {
  args.forEach(
    (bool: boolean): void => {
      expect(bool).to.be.a('boolean');
    },
  );
}
