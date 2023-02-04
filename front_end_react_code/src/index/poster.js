import React from "react";
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Poster = (props) => {
  return (
    <div className="index_sider">
      <div className="container">
        <AutoplaySlider
          play={true}
          // cancelOnInteraction={true}
          cancelOnInteraction={false} // should stop playing on user interaction
          interval={5000}
          animation="cubeAnimation"
        >
          {props.image.map(e=>{
        return <div data-src={e.image_poster} key={e.image_poster} />;
      })}
        </AutoplaySlider>

      </div>
    </div>
  );
};

export default Poster;
