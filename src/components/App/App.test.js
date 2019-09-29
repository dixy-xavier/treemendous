import React from 'react';
import { mount, shallow } from 'enzyme';
import App from './App';

describe('App component tests', () => {
  test('Should render', () => {
    expect(shallow(<App />).length).toEqual(1);
  });

  test('Should have Header component', () => {
    expect(mount(<App />).find('Header').first().length).toEqual(1);
  });

  test('Should have Main component', () => {
    expect(mount(<App />).find('Main').first().length).toEqual(1);
  });
});
