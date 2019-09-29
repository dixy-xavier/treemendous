import React from 'react';
import { shallow } from 'enzyme';
import Image from './Image';

describe('Image component tests', () => {
  const minProps = { src: 'https://upload.wikimedia.org/wikipedia/commons/3/36/Baobab_Adansonia_digitata.jpg' };
  test('Should render without crashing', () => {
    expect(shallow(<Image {...minProps} />).length).toEqual(1);
  });

  test('Should have img dom element', () => {
    expect(shallow(<Image {...minProps} />).find('img').first().length).toEqual(1);
  });

});
