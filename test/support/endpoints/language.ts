import { expect } from 'chai';

import { ILanguage } from '../../../src/interfaces';
import { isNameArray } from '../type-guards';

export function languageTests(language: ILanguage): void {
  expect(language.official).to.be.a('boolean');
  expect(language.iso639).to.be.a('string');
  expect(language.iso3166).to.be.a('string');
  expect(language.names).to.satisfy(isNameArray);
}
