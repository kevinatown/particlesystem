import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Stage, Layer, Rect } from 'react-konva';
import { Building } from '../';
import { randomBetween } from '../../../utils';
import './style.css';

class City extends Component {
	constructor(props) { 
    console.log(props);
    super(props);
    this.state = {
      color: 'black',
    };
	}

  render() {
    const maxBuildingWidth = 100;
    const minBuildingWidth = 300;
    const minBuildingHeight = 200;
    const maxBuildingHeight = 500;
    const buildings = [];
    let buildWidth = 0;
    while (buildWidth < this.props.width) {
      let height = randomBetween(minBuildingHeight, maxBuildingHeight);
      let width = randomBetween(minBuildingWidth, maxBuildingWidth);
      buildings.push(
        <Building
          key={buildWidth}
          width={width}
          height={height}
          x={buildWidth + 1}
          y={(this.props.height * 0.9) - height}
        />
      );
      for (let y = (this.props.height * 0.9) - height + 20; (y + 40) < ((this.props.height * 0.9) - 20); y+= 40) {
        for (let x = buildWidth + 21; (x + 40) < (buildWidth + 20 + width); x+= 40) {
          buildings.push(
            <Rect
              key={`${buildWidth}_${x}_${y}`}
              width={20}
              height={20}
              x={x}
              y={y}
              fill={['yellow', 'black'][randomBetween(0, 2)]}
            />
          );
        }
      }
      buildWidth += width;
    }
    return (
      <div className='city-canvas'>
        <Stage width={this.props.width} height={this.props.height}>
          <Layer>
            { buildings }
            <Rect
              width={this.props.width}
              height={this.props.height * 0.1}
              x={0}
              y={this.props.height - (this.props.height * 0.1)}
              fill={'#777372'}
            />
          </Layer>
        </Stage>
      </div>
    );
  }
}

City.propTypes = {
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
}

export default City;
