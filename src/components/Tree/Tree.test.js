import React from 'react';
import { shallow } from 'enzyme';
import Tree from './Tree';

describe('Tree component tests', () => {
  const props = { tree: {
    name: 'Baobab',
    species_name: 'Adansonia',
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/36/Baobab_Adansonia_digitata.jpg'
  } };
  const container = shallow(<Tree {...props} />);
  test('Should render without crashing', () => {
    expect(container.length).toEqual(1);
  });

  test('Should have LabelValue component', () => {
    expect(container.find('LabelValue').length).toEqual(2);
  });

  test('Should have ImageWrapper component on click', () => {
    container.find('div').first().simulate('click');
    expect(container.find('ImageWrapper').first().length).toEqual(1);
  });

  test('Should have no ImageWrapper component on 2nd click', () => {
    container.find('div').first().simulate('click');
    expect(container.find('ImageWrapper').first().length).toEqual(0);
  });

  test('Should have Dialog component on click on ImageWrapper', () => {
    container.find('div').first().simulate('click');
    container.find('ImageWrapper').first().simulate('click', { stopPropagation: f => f });
    expect(container.find('Dialog').first().length).toEqual(1);
  });

});
