import React from 'react';
import { mount, shallow } from 'enzyme';
import Header from './Header';

describe('Header component tests', () => {
  test('Should render', () => {
    expect(shallow(<Header />).length).toEqual(1);
  });

  test('Should have Header component', () => {
    expect(mount(<Header />).find('Image').first().length).toEqual(1);
  });

  test('Should have Main component', () => {
    expect(mount(<Header />).find('h1').first().length).toEqual(1);
  });
});
