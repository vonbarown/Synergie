import React, { Component } from "react";
import Modal from "../Modal/modal";

class AddShowForm extends Component {
  componentDidMount() {
    this.refs.img_url.focus();
  }

  render() {
    return (
      <div className="add-show">
        <Modal show={this.props.show} onClose={this.props.onClose}>
          <div>
            <p>Congrats You added</p>
            <img
              className="modal-show-img"
              src={this.props.img_url}
              alt={this.props.show_name}
            />
            <p>{this.props.show_name}</p>
          </div>
        </Modal>
        <form onSubmit={this.props.addShow} className="add-show-form">
          <div className="url form-element">
            <p>Show Image Url</p>
            <input
              name="img_url"
              className=" add-show-item shared-input-styling"
              ref="img_url"
              onChange={this.props.handleInput}
              type="text"
              placeholder="Url"
            />
          </div>
          <div className="name form-element">
            <p>Show Name</p>
            <input
              name="show_name"
              className=" add-show-item shared-input-styling"
              onChange={this.props.handleInput}
              type="text"
              placeholder="Name"
            />
          </div>
          <div className="genre form-element">
            <p>Genre</p>
            <select
              className="add-show-item add-show-select"
              onChange={this.props.handleSelect}
            >
              <option>---Select A Genre---</option>
              {this.props.genres.map((el) => {
                return (
                  <option key={el.id} value={el.id}>
                    {el.genre_name}
                  </option>
                );
              })}
            </select>
          </div>
          <button onClick={this.props.showModal} className="form-button">
            Submit
          </button>
          <br />
        </form>
      </div>
    );
  }
}

export default AddShowForm;
