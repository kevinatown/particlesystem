import React from 'react';
import { shallow } from 'enzyme';
import Building from './';

describe('<Building />', () => {
	let wrapper;
  const baseProps = {
    height: 400,
    width: 300,
  };
  beforeEach(() => {
    wrapper = shallow(<Building { ...baseProps } />);
  });

  it('renders without crashing', () => {
    expect(wrapper.length).toBe(1);
  });
});
