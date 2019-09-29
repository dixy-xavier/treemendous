import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App component tests', () => {
  const container = shallow(<App />);
  test('Should render without crashing', () => {
    expect(container.length).toEqual(1);
  });

  test('Should have Header component', () => {
    expect(container.find('Header').first().length).toEqual(1);
  });

  test('Should have Main component', () => {
    expect(container.find('Main').first().length).toEqual(1);
  });
});
