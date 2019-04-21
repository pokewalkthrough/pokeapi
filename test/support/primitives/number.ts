import { expect } from 'chai';

export function numberTest(...args: number[]): void {
  args.forEach(
    (num: number): void => {
      expect(num).to.be.a('number');
    },
  );
}
