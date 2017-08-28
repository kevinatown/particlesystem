import React from 'react';
import PropTypes from 'prop-types';
import { Rect } from 'react-konva';
import { randomBetween } from '../../../utils';
import './style.css';

const buildingColors = [
  '#938683',
  '#785F59',
  '#9C412C',
  '#AB0F0F',
  '#F3F2F2',
  '#B59350',
  '#907747',
];

const Building = ({ x, y, height, width }) => {
  const color = buildingColors[randomBetween(0,buildingColors.length)];
  return (
    <Rect
      x={x}
      y={y}
      width={width}
      height={height}
      fill={color}
      shadowBlur={5}
    />
  );
};

Building.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
}

export default Building;
