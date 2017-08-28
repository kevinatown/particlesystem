import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Toggle from 'material-ui/Toggle';
import Slider from 'material-ui/Slider';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import Settings from 'material-ui/svg-icons/action/settings';
import './style.css';

class FormContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      sliderValue: props.values.speed,
      open: false,
    };
    this.handleSliderChange = this.handleSliderChange.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleSliderChange(e, v) {
    this.setState({ sliderValue: v });
  }

  handleToggle() {
    this.setState({open: !this.state.open});
  }
  
  render() {
  	return (
      <div className="form-container">
      	<MuiThemeProvider>
          <FloatingActionButton
            onClick={this.handleToggle}
            style={{
              margin: 0,
              top: 20,
              right: 20,
              left: 'auto',
              position: 'fixed',
              color: 'white',
            }}
          >
            <Settings />
          </FloatingActionButton>
        </MuiThemeProvider>
        <MuiThemeProvider>
          <Drawer open={this.state.open}>
            <div className="drawer-container">
              <MenuItem>
                <Toggle
                  label="Play Animation"
                  defaultToggled={true}
                  onToggle={(e, v) => this.props.handleChange('play', v)}
                />
              </MenuItem>
              <MenuItem>
                <Slider
                  min={1}
                  max={40}
                  step={1}
                  sliderStyle={{width: 200, height: 20, margin: 0}}
                  value={this.state.sliderValue}
                  onChange={this.handleSliderChange}
                  onDragStop={() => this.props.handleChange('speed', this.state.sliderValue)}
                />
              </MenuItem>
              <MenuItem>
                <DropDownMenu value={this.props.values.weather} onChange={(e, i, v) => this.props.handleChange('weather', v)}>
                  <MenuItem value="rain" primaryText="Rain" />
                  <MenuItem value="snow" primaryText="Snow" />
                </DropDownMenu>
              </MenuItem>
              <MenuItem>
                <DropDownMenu value={this.props.values.wind} onChange={(e, i, v) => this.props.handleChange('wind', v)}>
                  <MenuItem value="bottom" primaryText="No Wind" />
                  <MenuItem value="bottom-right" primaryText="Eastward Wind" />
                  <MenuItem value="bottom-left" primaryText="Westward Wind" />
                </DropDownMenu>
              </MenuItem>
              <MenuItem>
                <RaisedButton
                  label="Create New Background"
                  onClick={this.props.createNewBackground}
                />
              </MenuItem>
            </div>
           </Drawer>
        </MuiThemeProvider>
      </div>
    );
  }
}

FormContainer.propTypes = {
  values: PropTypes.shape({
    wind: PropTypes.string,
    weather: PropTypes.string,
    speed: PropTypes.number,
    play: PropTypes.bool,
  }).isRequired,
  createNewBackground: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default FormContainer;
