import React from 'react';
import { shallow } from 'enzyme';
import BackgroundContainer from './';

describe('<BackgroundContainer />', () => {
	let wrapper;
  const baseProps = {};
  beforeEach(() => {
    wrapper = shallow(<BackgroundContainer { ...baseProps } />);
  });

  it('renders without crashing', () => {
    expect(wrapper.length).toBe(1);
  });
});
