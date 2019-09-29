import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App component tests', () => {
  test('Should render without crashing', () => {
    expect(shallow(<App />).length).toEqual(1);
  });

  test('Should have Header component', () => {
    expect(shallow(<App />).find('Header').first().length).toEqual(1);
  });

  test('Should have Main component', () => {
    expect(shallow(<App />).find('Main').first().length).toEqual(1);
  });
});
