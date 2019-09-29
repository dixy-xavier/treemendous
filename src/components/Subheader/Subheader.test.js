import React from 'react';
import { shallow } from 'enzyme';
import Subheader from './Subheader';

describe('Subheader component tests', () => {
  let tested = false;
  const props = { searchText: 'test', setSearchText: () => tested = true };
  const containerWithoutProps = shallow(<Subheader />);
  const container = shallow(<Subheader {...props} />);
  test('Should render without crashing', () => {
    expect(containerWithoutProps.length).toEqual(1);
  });

  test('Should have h2 dom element', () => {
    expect(containerWithoutProps.find('h2').first().length).toEqual(1);
  });

  test('Should have Search component', () => {
    expect(containerWithoutProps.find('Search').first().length).toEqual(1);
  });

  test('Should have Search component with searchText prop', () => {
    expect(container.find('Search').prop('searchText')).toEqual(props.searchText);
  });

  test('Should have Search component with setSearchText prop', () => {
    expect(container.find('Search').prop('onSearch')).toEqual(props.setSearchText);
  });

});
