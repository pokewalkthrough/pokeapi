import { expect } from 'chai';

export function stringTest(allowNull: false, ...args: string[]): void;
export function stringTest(allowNull: true, ...args: Array<string | null>): void;
export function stringTest(allowNull: boolean, ...args: Array<string | null>): void {
  args.forEach(
    (str: string | null): void => {
      if (str) {
        expect(str).to.be.a('string');
      } else {
        if (allowNull) {
          expect(str).to.equal(null);
        } else {
          expect(str).to.not.equal(null);
        }
      }
    },
  );
}
