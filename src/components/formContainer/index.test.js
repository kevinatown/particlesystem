import React from 'react';
import { mount } from 'enzyme';
import FormContainer from './';

describe('<FormContainer />', () => {
	let wrapper;
  const baseProps = {
    values: {
      weather: 'rain',
      wind: 'bottom',
      time: 'night',
      play: true,
      speed: 4,
    }
  };
  beforeEach(() => {
    wrapper = mount(<FormContainer { ...baseProps } />);
  });

  it('renders without crashing', () => {
    expect(wrapper.length).toBe(1);
  });
});
