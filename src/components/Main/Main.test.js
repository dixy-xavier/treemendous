import React from 'react';
import { shallow } from 'enzyme';
import Main from './Main';

describe('Main component tests', () => {
  test('Should render without crashing', () => {
    expect(shallow(<Main />).length).toEqual(1);
  });

  test('Should have Subheader component', () => {
    expect(shallow(<Main />).find('Subheader').first().length).toEqual(1);
  });

  test('Should have NoData component', () => {
    expect(shallow(<Main />).find('NoData').first().length).toEqual(1);
  });

  test('Should have Loader component', () => {
    expect(shallow(<Main />).find('Loader').first().length).toEqual(1);
  });
});
