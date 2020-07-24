import React from "react";
import "./AddShow.css";
import axios from "axios";
import { connect } from "react-redux";
import AddShowForm from "./AddShowForm";
import OMDBSearch from "../../containers/omdbContainer";
class AddShow extends React.Component {
  state = {
    img_url: "",
    show_name: "",
    genres: [],
    genre_id: "",
    show: false,
    search: false,
  };

  componentDidMount() {
    this.fetchGenres();
  }

  fetchGenres = async () => {
    try {
      const {
        data: { payload },
      } = await axios.get(`/api/genres`);
      this.setState({
        genres: payload,
      });
    } catch (error) {}
  };

  handleInput = (e) => this.setState({ [e.target.name]: e.target.value });

  addShow = async (searchObj) => {
    const showObj = {
      title: this.state.show_name,
      img_url: this.state.img_url,
      user_id: this.props.loggedInUser.id,
      genre_id: this.state.genre_id,
    };

    let queryObj = Object.keys(searchObj).length ? searchObj : showObj;

    console.log(queryObj);

    try {
      await axios.post(`/api/shows`, queryObj);
    } catch (error) {
      console.log("add show error", error);
    }
  };

  handleSelect = (e) => this.setState({ genre_id: parseInt(e.target.value) });

  showModal = (e) => this.setState({ show: !this.state.show });

  render() {
    return (
      <div className="add-show-form-page">
        <div id="banner">
          How would you like to proceed:{" "}
          <button
            onClick={() => this.setState({ search: !this.state.search })}
            id="toggle-search"
          >
            {this.state.search ? <span>Upload</span> : <span>Search</span>} Show
          </button>
        </div>
        {this.state.search ? (
          <OMDBSearch
            addShow={this.addShow}
            loggedInUser={this.props.loggedInUser}
          />
        ) : (
          <AddShowForm
            show={this.state.show}
            onClose={this.showModal}
            img_url={this.state.img_url}
            show_name={this.state.show_name}
            addShow={this.addShow}
            handleInput={this.handleInput}
            handleSelect={this.handleSelect}
            genres={this.state.genres}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loggedInUser: state.usersReducer.loggedUser.user,
  };
};

export default connect(mapStateToProps, null)(AddShow);
