import React from "react";
import { debounce } from "lodash";

const withFormLogic = Component => {
  return class WithFormLogic extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        query: ""
      };
      this.debouncedSearch = debounce(this.getSearchOffers, 500);
    }

    getSearchOffers = word => this.props.getSearchOffers(word);

    handleChange = ({ target }) => {
      this.setState({ query: target.value, offers: [] }, () => {
        this.debouncedSearch(this.state.query);
      });
    };

    handleSubmit = event => event.preventDefault();

    render() {
      return (
        <Component
          {...this.props}
          query={this.state.query}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          handleShow={this.handleShow}
        />
      );
    }
  };
};

export default withFormLogic;
