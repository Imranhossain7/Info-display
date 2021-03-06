import React, { Component } from "react";
import { newsCategory } from "../news";

class Header extends Component {
  state = {
    searchTerm: "",
  };

  handleChange = (e) => {
    this.setState({ searchTerm: e.target.value });
  };
  handleKeyPress = (e) => {
    if (e.key === "Enter") {
      this.props.search(this.state.searchTerm);
    }
  };

  render() {
    const { category, changeCategory } = this.props;
    return (
      <div className="my-4">
        <h1 className="mb-4" style={{ fontWeight: 300 }}>
          Important Headlines of Today
        </h1>
        <input
          ref={this.props.innerRef}
          type="search"
          className="form-control"
          placeholder="Enter Anything & Press Enter To Search"
          value={this.state.searchTerm}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
        <div className="my-4">
          {newsCategory &&
            Object.keys(newsCategory).map((item) => {
              if (category === newsCategory[item]) {
                return (
                  <button
                    onClick={() => changeCategory(newsCategory[item])}
                    className="btn btn-sm btn-warning mr-2 mb-2"
                  >
                    {`# ${newsCategory[item]}`}
                  </button>
                );
              }
              return (
                <button
                  onClick={() => changeCategory(newsCategory[item])}
                  className="btn btn-sm btn-light mr-2 mb-2"
                >
                  {`# ${newsCategory[item]}`}
                </button>
              );
            })}
        </div>
      </div>
    );
  }
}

export default React.forwardRef((props, ref) => (
  <Header {...props} innerRef={ref} />
));
