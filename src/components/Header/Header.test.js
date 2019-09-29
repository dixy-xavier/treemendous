import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('Header component tests', () => {
  const container = shallow(<Header />);
  test('Should render without crashing', () => {
    expect(container.length).toEqual(1);
  });

  test('Should have Image component', () => {
    expect(container.find('Image').first().length).toEqual(1);
  });

  test('Should have h1 dom element', () => {
    expect(container.find('h1').first().length).toEqual(1);
  });
});
