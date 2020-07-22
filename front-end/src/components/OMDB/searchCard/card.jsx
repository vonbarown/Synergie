import React from "react";
import "./card.scss";
import Front from "./front";
import Back from "./back";

class SearchCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { flipped: false };
    this.flip = this.flip.bind(this);
  }

  flip = () => {
    this.setState({ flipped: !this.state.flipped });
  };
  render() {
    return (
      <div
        onMouseEnter={this.flip}
        onMouseLeave={this.flip}
        className={"card-container" + (this.state.flipped ? " flipped" : "")}
      >
        <Front result={this.props.result} />
        <Back result={this.props.result} />
      </div>
    );
  }
}

export default SearchCard;
