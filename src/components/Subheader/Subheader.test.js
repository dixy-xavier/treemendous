import React from 'react';
import { shallow } from 'enzyme';
import Subheader from './Subheader';

describe('Subheader component tests', () => {
  let tested = false;
  const props = { searchText: 'test', setSearchText: () => tested = true };
  test('Should render without crashing', () => {
    expect(shallow(<Subheader />).length).toEqual(1);
  });

  test('Should have h2 dom element', () => {
    expect(shallow(<Subheader />).find('h2').first().length).toEqual(1);
  });

  test('Should have Search component', () => {
    expect(shallow(<Subheader />).find('Search').first().length).toEqual(1);
  });

  test('Should have Search component with searchText prop', () => {
    expect(shallow(<Subheader {...props} />).find('Search').prop('searchText')).toEqual(props.searchText);
  });

  test('Should have Search component with setSearchText prop', () => {
    expect(shallow(<Subheader {...props} />).find('Search').prop('onSearch')).toEqual(props.setSearchText);
  });

});
