import React, { useEffect } from "react";
import { connect } from "react-redux";

import LottieAnimation from '../components/LottieAnimation';
import * as logoAnimation from  '../assets/animations/hloading.json';

const Splash = props => {

  const { authentication } = props;

  function routeChange(){
    props.history.push('/main')
  }

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        width: '100vw',
        height: '100vh',
      }}>
      <LottieAnimation routeChange={routeChange} animation={logoAnimation} isLooping={false} />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    authentication: state.authentication
  };
};

const mapDispatchToProps = dispatch => {
  return {}
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Splash);
