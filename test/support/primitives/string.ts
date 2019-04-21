import { expect } from 'chai';

export function stringTest(allowNull: false, ...args: string[]): void;
export function stringTest(allowNull: true, ...args: Array<string | null>): void;
export function stringTest(allowNull: boolean, ...args: Array<string | null>): void {
  args.forEach(
    (str: string | null): void => {
      if (allowNull) {
        expect(str).to.be.oneOf(['string', null]);
      } else {
        expect(str).to.be.a('string');
      }
    },
  );
}
