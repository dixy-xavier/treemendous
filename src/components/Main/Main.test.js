import React from 'react';
import { shallow } from 'enzyme';
import Main from './Main';

describe('Main component tests', () => {
  const container = shallow(<Main />);
  test('Should render without crashing', () => {
    expect(container.length).toEqual(1);
  });

  test('Should have Subheader component', () => {
    expect(container.find('Subheader').first().length).toEqual(1);
  });

  test('Should have NoData component', () => {
    expect(container.find('NoData').first().length).toEqual(1);
  });

  test('Should have Loader component', () => {
    expect(container.find('Loader').first().length).toEqual(1);
  });
});
