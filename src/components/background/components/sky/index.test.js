import React from 'react';
import { shallow } from 'enzyme';
import Sky from './';

describe('<Sky />', () => {
	let wrapper;
  const baseProps = {
    height: 400,
    width: 300,
  };
  beforeEach(() => {
    wrapper = shallow(<Sky { ...baseProps } />);
  });

  it('renders without crashing', () => {
    expect(wrapper.length).toBe(1);
  });
});