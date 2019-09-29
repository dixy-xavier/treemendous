import React from 'react';
import { shallow } from 'enzyme';
import ImageWrapper from './ImageWrapper';

describe('ImageWrapper component tests', () => {
  const minProps = { src: 'https://upload.wikimedia.org/wikipedia/commons/3/36/Baobab_Adansonia_digitata.jpg' };
  const container = shallow(<ImageWrapper {...minProps} />);
  test('Should render without crashing', () => {
    expect(container.length).toEqual(1);
  });

  test('Should have anchor dom element', () => {
    expect(container.find('a').first().length).toEqual(1);
  });

  test('Should have Image component', () => {
    expect(container.find('Image').first().length).toEqual(1);
  });

});
