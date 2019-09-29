import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('Header component tests', () => {
  test('Should render without crashing', () => {
    expect(shallow(<Header />).length).toEqual(1);
  });

  test('Should have Image component', () => {
    expect(shallow(<Header />).find('Image').first().length).toEqual(1);
  });

  test('Should have h1 dom element', () => {
    expect(shallow(<Header />).find('h1').first().length).toEqual(1);
  });
});
