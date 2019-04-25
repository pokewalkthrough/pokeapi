import { expect } from 'chai';

export function numberTest(allowNull: false, ...args: number[]): void;
export function numberTest(allowNull: true, ...args: Array<number | null>): void;
export function numberTest(allowNull: boolean, ...args: Array<number | null>): void {
  args.forEach(
    (num: number | null): void => {
      if (allowNull) {
        expect(num).to.be.oneOf(['number', null]);
      } else {
        expect(num).to.be.a('number');
      }
    },
  );
}
