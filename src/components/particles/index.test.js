import React from 'react';
import { shallow } from 'enzyme';
import PartilceContainer from './';
import { defaultParams } from './utils';

describe('<PartilceContainer />', () => {
	let wrapper;
  const baseProps = {
    weather: 'rain',
    wind: 'bottom',
    time: 'night',
    play: true,
    speed: 4,
    params: defaultParams,
  };
  beforeEach(() => {
    wrapper = shallow(<PartilceContainer { ...baseProps } />);
  });

  it('renders without crashing', () => {
    expect(wrapper.length).toBe(1);
  });
});
