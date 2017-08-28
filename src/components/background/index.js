import React, { Component } from 'react';
import './style.css';
import {
  Sky,
  City,
} from './components';

class BackgroundContainer extends Component {
  
  constructor(props) { 
    super(props);
    this.state = {
      width: window.innerWidth,
      height: window.innerHeight,
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentWillMount() {
    this.updateWindowDimensions();
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({
      width: window.innerWidth, 
      height: window.innerHeight,
    });
  }

  render() {
    return (
      <div className="background-canvas">
        <Sky
          height={this.state.height}
          width={this.state.width}
        />
        <City
          height={this.state.height}
          width={this.state.width}
        />
      </div>
    );
  }
}

export default BackgroundContainer;
