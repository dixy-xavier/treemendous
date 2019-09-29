import React from 'react';
import { shallow } from 'enzyme';
import Trees from './Trees';

describe('Trees component tests', () => {
  const props = { trees: [{
    name: 'Baobab',
    species_name: 'Adansonia',
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/36/Baobab_Adansonia_digitata.jpg'
  }, {
    name: 'Red Mangrove',
    species_name: 'Rhizophora mangle',
    image: 'https://upload.wikimedia.org/wikipedia/en/1/16/Red_mangrove-everglades_natl_park.jpg'
  }] };
  test('Should render without crashing', () => {
    expect(shallow(<Trees {...props} />).length).toEqual(1);
  });

  test('Should have Tree component', () => {
    expect(shallow(<Trees {...props} />).find('Tree').length).toEqual(2);
  });

  test('Should have Tree component with tree prop', () => {
    expect(shallow(<Trees {...props} />).find('Tree').first().prop('tree')).toEqual(props.trees[0]);
  });

});
