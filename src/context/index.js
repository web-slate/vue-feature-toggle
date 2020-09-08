import CoreContext from './CORE';
import USContext from './US';
import INContext from './IN';
import SGContext from './SG';

let CountryContext = USContext;

if (process.env.COUNTRY === 'IN') {
  CountryContext = INContext;
} else if (process.env.COUNTRY === 'SG') {
  CountryContext = SGContext;
}

export default {
  ...CoreContext,
  ...CountryContext,
};