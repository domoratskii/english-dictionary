import React from "react";

const withOffersLogic = Component => {
  return class WithOffersLogic extends React.Component {
    handleLogic = meanings => {
      const { getSearchWord, getSearchOptions } = this.props;
      if (meanings.length === 1) {
        getSearchWord(meanings);
      } else {
        getSearchOptions(meanings);
      }
    };

    handleClick = meanings => this.handleLogic(meanings);
    handlePress = (meanings, { charCode }) => charCode === 13 && this.handleLogic(meanings);

    render() {
      return (
        <Component
          handleClick={this.handleClick}
          handlePress={this.handlePress}
          {...this.props}
        />
      );
    }
  };
};

export default withOffersLogic;
