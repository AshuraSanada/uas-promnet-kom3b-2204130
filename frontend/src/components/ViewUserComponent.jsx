import React, { Component } from "react";
import UserService from "../services/UserService";
import "./ViewUserComponent.css";

class ViewUserComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      user: {},
    };
  }

  componentDidMount() {
    UserService.getTransaksiKeuanganById(this.state.id).then(
      (res) => {
        this.setState({ user: res.data });
      }
    );
  }

  handleBack = () => {
    // Use the history object to navigate back to the users page
    this.props.history.push("/users");
  };

  render() {
    return (
      <div>
        <br></br>
        <div className="card col-md-10 offset-md-1">
          <h3 className="text-center">View User Details</h3>
          <div className="card-body">
            <div className="row">
              <label>ID:</label>
              <div>{this.state.user.id}</div>
            </div>
            <div className="row">
              <label>Date:</label>
              <div>{this.state.user.date}</div>
            </div>
            <div className="row">
              <label>Description:</label>
              <div>{this.state.user.description}</div>
            </div>
            <div className="row">
              <label>Amount:</label>
              <div>{this.state.user.amount}</div>
            </div>
            <div className="row">
              <label>Status:</label>
              <div>{this.state.user.status}</div>
            </div>
            <div className="row">
              <label>Receiver:</label>
              <div>{this.state.user.receiver}</div>
            </div>
            <div className="row">
              <label>JK:</label>
              <div>{this.state.user.jk}</div>
            </div>
            <div className="row">
              <label>No Telp:</label>
              <div>{this.state.user.no_telp}</div>
            </div>
            <div className="row">
              <label>Address:</label>
              <div>{this.state.user.address}</div>
            </div>
            <button className="btn btn-info" onClick={this.handleBack}>
              Back
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ViewUserComponent;
