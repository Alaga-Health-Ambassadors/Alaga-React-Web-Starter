import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

import Lottie from 'react-lottie';

const styles = theme => ({
  root: {
    width: '100%',
    position: 'fixed', 
    bottom: 0,
    left: 0
  }
});
 
const LottieAnimation = props => {
  const { animation, isLooping } = props;

  const [isPaused, setPaused] = React.useState(false);
  const [isStopped, setStop] = React.useState(false);

  const defaultOptions = {
    loop: isLooping,
    autoplay: true, 
    animationData: animation.default,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid meet'
    }
  };

  return (
    <Lottie
      options={defaultOptions}
      height={300}
      width={'100%'}
      isStopped={isStopped}
      isPaused={isPaused}
      eventListeners={[
        {
          eventName: 'complete',
          callback: () => props.routeChange(),
        }
      ]}/>
  );
};

export default withStyles(styles)(LottieAnimation);
