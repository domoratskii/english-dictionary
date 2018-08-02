import React from "react";

const withSound = Component => {
  return class WithSound extends React.Component {

    getSound = node => (this.sound = node);

    handleClick = () => {
      this.sound.pause();
      this.sound.currentTime = 0;
      this.sound.play();
    };

    render() {
      return (
        <Component
          {...this.props}
          handleClick={this.handleClick}
          getSound={this.getSound}
        />
      );
    }
  };
};

export default withSound;
