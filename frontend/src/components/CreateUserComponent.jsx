import React, { Component } from "react";
import UserService from "../services/UserService";

class CreateUserComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      date: "",
      description: "",
      amount: 1, // Change the initial value to 0 or any other default integer value
      status: "",
      receiver: "",
      jk: "",
      no_telp: "",
      address: "",
    };

    // Bind all the functions used here
    this.changeDate = this.changeDate.bind(this);
    this.changeDescription = this.changeDescription.bind(this);
    this.changeAmount = this.changeAmount.bind(this);
    this.changeStatus = this.changeStatus.bind(this);
    this.changeReceiver = this.changeReceiver.bind(this);
    this.changeJK = this.changeJK.bind(this);
    this.changeNoTelp = this.changeNoTelp.bind(this);
    this.changeAddress = this.changeAddress.bind(this);
    this.saveOrUpdateUser = this.saveOrUpdateUser.bind(this);
    this.getTitle = this.getTitle.bind(this);
    // Add binding for the cancel function
    this.cancel = this.cancel.bind(this);
  }

  // Function to get the title based on the condition
  getTitle() {
    return this.state.id === "_add" ? "Add User" : "Update User";
  }

  componentDidMount() {
    if (this.state.id !== "_add") {
      UserService.getTransaksiKeuanganById(this.state.id)
        .then((res) => {
          let user = res.data;
          this.setState({
            date: user.date,
            description: user.description,
            amount: user.amount,
            status: user.status,
            receiver: user.receiver,
            jk: user.jk,
            no_telp: user.no_telp,
            address: user.address,
          });
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }

  saveOrUpdateUser = (e) => {
    e.preventDefault();
    let user = {
      date: this.state.date,
      description: this.state.description,
      amount: this.state.amount,
      status: this.state.status,
      receiver: this.state.receiver,
      jk: this.state.jk,
      no_telp: this.state.no_telp,
      address: this.state.address,
    };
  
    if (this.state.id === "_add") {
      UserService.addTransaksiKeuangan(user).then((res) => {
        window.alert("Transaction created successfully!");
        this.props.history.push("/users");
      });
    } else {
      UserService.editTransaksiKeuangan(user, this.state.id).then((res) => {
        window.alert("Transaction updated successfully!");
        this.props.history.push("/users");
      });
    }
  };

  // Change functions for additional columns
  changeDate = (event) => {
    this.setState({ date: event.target.value });
  };

  changeDescription = (event) => {
    this.setState({ description: event.target.value });
  };

  changeAmount = (event) => {
    this.setState({ amount: parseInt(event.target.value, 10) || 0 });
  };

  changeStatus = (event) => {
    // If the value is not explicitly changed, set it to the default value (debit)
    const statusValue = event.target.value || 'debit';
    this.setState({ status: statusValue });
  };
  changeReceiver = (event) => {
    this.setState({ receiver: event.target.value });
  };

  changeJK = (event) => {
    // If the value is not explicitly changed, set it to the default value (Laki-Laki)
    const jkValue = event.target.value || 'L';
    this.setState({ jk: jkValue });
  };

  changeNoTelp = (event) => {
    this.setState({ no_telp: event.target.value });
  };

  changeAddress = (event) => {
    this.setState({ address: event.target.value });
  };

  // Add cancel function
  cancel() {
    this.props.history.push("/users");
  }

  render() {
    return (
      <div>
        <br></br>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              {this.getTitle()}
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label> ID: </label>
                    <input
                      placeholder="ID"
                      name="id"
                      className="form-control"
                      value={this.state.id}
                      readOnly
                    />
                  </div>
                  <div className="form-group">
                    <label> Date: </label>
                    <input
                      type="date"
                      placeholder="Date"
                      name="date"
                      className="form-control"
                      value={this.state.date}
                      onChange={this.changeDate}
                    />
                  </div>
                  <div className="form-group">
                    <label> Description: </label>
                    <input
                      placeholder="Description"
                      name="description"
                      className="form-control"
                      value={this.state.description}
                      onChange={this.changeDescription}
                    />
                  </div>
                  <div className="form-group">
                    <label> Amount: </label>
                    <input
                      placeholder="Amount"
                      name="amount"
                      type="number"
                      className="form-control"
                      value={this.state.amount}
                      onChange={this.changeAmount}
                    />
                  </div>
                  <div className="form-group">
                    <label> Status: </label>
                    <select
                      name="status"
                      className="form-control"
                      value={this.state.status}
                      onChange={this.changeStatus}
                    >
                      <option value="debit">Debit</option>
                      <option value="kredit">Kredit</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label> Receiver: </label>
                    <input
                      placeholder="Receiver"
                      name="receiver"
                      className="form-control"
                      value={this.state.receiver}
                      onChange={this.changeReceiver}
                    />
                  </div>
                  <div className="form-group">
                    <label> Jenis Kelamin: </label>
                    <select
                      name="jk"
                      className="form-control"
                      value={this.state.jk}
                      onChange={this.changeJK}
                    >
                      <option value="L">Laki-Laki</option>
                      <option value="P">Perempuan</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label> No. Telp: </label>
                    <input
                      placeholder="No. Telp"
                      name="no_telp"
                      className="form-control"
                      value={this.state.no_telp}
                      onChange={this.changeNoTelp}
                    />
                  </div>
                  <div className="form-group">
                    <label> Address: </label>
                    <input
                      placeholder="Address"
                      name="address"
                      className="form-control"
                      value={this.state.address}
                      onChange={this.changeAddress}
                    />
                  </div>

                  <button
                    className="btn btn-success"
                    onClick={this.saveOrUpdateUser}
                  >
                    Save
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={this.cancel}
                    style={{ marginLeft: "10px" }}
                  >
                    Cancel
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateUserComponent;
