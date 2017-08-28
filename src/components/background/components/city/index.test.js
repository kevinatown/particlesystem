import React from 'react';
import { shallow } from 'enzyme';
import City from './';

describe('<City />', () => {
	let wrapper;
  const baseProps = {
    x: 0,
    y: 0,
    height: 400,
    width: 300,
  };
  beforeEach(() => {
    wrapper = shallow(<City { ...baseProps } />);
  });

  it('renders without crashing', () => {
    expect(wrapper.length).toBe(1);
  });
});
