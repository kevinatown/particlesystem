import React from 'react';
import PropTypes from 'prop-types';
import { Stage, Layer, Rect } from 'react-konva';
import './style.css';

const Sky = ({ height, width }) => (
  <div className="sky-canvas">
    <Stage width={width} height={height}>
      <Layer>
        <Rect
          x={0}
          y={0}
          width={width}
          height={height}
          fill={'black'}
          shadowBlur={5}
        />
      </Layer>
    </Stage>
  </div>
);


Sky.propTypes = {
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
}

export default Sky;
