import React from 'react';
import PropTypes from 'prop-types';
import Particles from 'react-particles-js';
import Raindrop from '../images/rain_drop.png';
import Snowflake from '../images/snowflake.png';
import './style.css';

const PartilceContainer = ({ params, style, play, weather, speed, wind }) => {
  params.particles.move.enable = play;
  params.particles.shape.image.src = weather === 'rain' ? Raindrop : Snowflake;
  params.particles.move.speed = speed;
  params.particles.move.direction = wind;
  return (
    <div className="particle-canvas" style={style}>
      <Particles
        params={params}
        width="100vw"
        height="100vh"
      />
    </div>
  );
};

PartilceContainer.propTypes = {
  params: PropTypes.object.isRequired,
  style: PropTypes.object.isRequired,
  play: PropTypes.bool.isRequired, 
  weather: PropTypes.string.isRequired,
  speed: PropTypes.number.isRequired,
  wind: PropTypes.string.isRequired,
};

export default PartilceContainer;
