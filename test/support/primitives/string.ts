import { expect } from 'chai';

export function stringTest(...args: string[]): void {
  args.forEach(
    (str: string): void => {
      expect(str).to.be.a('string');
    },
  );
}
