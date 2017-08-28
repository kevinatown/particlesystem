import React, { Component } from 'react';
import _ from 'lodash';
import PartilceContainer from '../components/particles';
import BackgroundContainer from '../components/background';
import FormContainer from '../components/formContainer';
import { defaultParams } from '../components/particles/utils';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      background: <BackgroundContainer />,
      time: 'night',
      values: {
        weather: 'rain',
        wind: 'bottom',
        play: true,
        speed: 4,
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.createNewBackground = this.createNewBackground.bind(this);
  }

  handleChange(k, v) {
    this.setState({
      values: {
        ...this.state.values,
        [k]: v,
      },
    });
  }

  createNewBackground() {
    this.setState({
      background: <BackgroundContainer />,
    })
  } 

  render() {
    const partilceParams1 = { ...defaultParams };
    const partilceParams2 = { ...defaultParams };
    partilceParams1.particles.size.value = 2;
    partilceParams2.particles.size.value = 4;
    const { speed, play, wind, weather } = this.state.values;
    return (
      <div className="App">
        <FormContainer
          handleChange={this.handleChange}
          createNewBackground={this.createNewBackground}
          values={this.state.values}
        />
        <PartilceContainer
          params={partilceParams1}
          style={{
            zIndex: 1,
          }}
          speed={speed / 2}
          weather={weather}
          play={play}
          wind={wind}
          key={_.uniqueId()}
        />
        { this.state.background }
        <PartilceContainer
          params={partilceParams2}
          style={{
            zIndex: 100,
          }}
          speed={speed}
          weather={weather}
          play={play}
          wind={wind}
          key={_.uniqueId()}
        />
      </div>
    );
  }
}

export default App;
