import React from 'react';
import { shallow } from 'enzyme';
import Search from './Search';

describe('Search component tests', () => {
  let tested = false;
  const props = { searchText: 'test', onSearch: () => tested = true };
  const containerWithoutProps = shallow(<Search />);
  const container = shallow(<Search {...props} />);
  test('Should render without crashing', () => {
    expect(containerWithoutProps.length).toEqual(1);
  });

  test('Should have FaSearch component', () => {
    expect(containerWithoutProps.find('FaSearch').first().length).toEqual(1);
  });

  test('Should have input dom element', () => {
    expect(containerWithoutProps.find('input').first().length).toEqual(1);
  });

  test('Should have input dom element with value prop', () => {
    expect(container.find('input').prop('value')).toEqual(props.searchText);
  });

  test('Should have input dom element which changes value prop on change event', () => {
    container.find('input').simulate('change', {
      target: {
        value: 'test',
      },
    });
    expect(container.find('input').prop('value')).toEqual('test');
  });

  test('Should have input dom element which triggers on change event', () => {
    container.find('input').simulate('change', {
      target: {
        value: 'test',
      },
    });
    expect(tested).toEqual(true);
  });
});
