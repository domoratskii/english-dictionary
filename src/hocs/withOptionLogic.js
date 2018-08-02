import React from "react";

const withOptionLogic = Component => {
  return class withOptionLogic extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isActive: false,
      };
    }

    handlePosition = node => (this.hoverContent = node);

    handleEnter = ({ target }) => {
      const optionCoords = target.getBoundingClientRect();
      const parentCoords = this.props.parentCoords;
      this.hoverContent.style.transform = `translateY(${optionCoords.top - parentCoords.top + 55}px)`;
      this.setState(({ hover }) => ({ isActive: true }));
    };

    handleLeave = () => this.setState({isActive: false});

    handleLogic = (option) => this.props.getSearchWord(option);
    handleClick = (option) => this.handleLogic(option);
    handlePress = (option, { charCode }) => charCode === 13 && this.handleLogic(option);

    render() {
      return (
        <Component
          {...this.props}
          handleClick={this.handleClick}
          handlePress={this.handlePress}
          handleEnter={this.handleEnter}
          handleLeave={this.handleLeave}
          isActive={this.state.isActive}
          handlePosition={this.handlePosition}
        />
      );
    }
  };
};

export default withOptionLogic;
