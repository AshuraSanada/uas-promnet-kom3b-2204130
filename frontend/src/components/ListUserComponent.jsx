import React, { Component } from 'react';
import UserService from '../services/UserService';
import 'bootstrap/dist/css/bootstrap.min.css';

class ListUserComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
    };

    this.addUser = this.addUser.bind(this);
    this.editUser = this.editUser.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
    this.viewUser = this.viewUser.bind(this);
  }

  deleteUser(id) {
    const isConfirmed = window.confirm("Are you sure you want to delete this transaction?");
    
    if (isConfirmed) {
      UserService.deleteTransaksiKeuangan(id).then((res) => {
        this.setState({
          users: this.state.users.filter((user) => user.id !== id),
        });
      });
    }
  }

  viewUser(id) {
    this.props.history.push(`/view-user/${id}`);
  }

  editUser(id) {
    this.props.history.push(`/add-user/${id}`);
  }

  componentDidMount() {
    UserService.getTransaksiKeuangans().then((res) => {
      if (res.data == null) {
        this.props.history.push('/');
      }
      this.setState({ users: res.data });
    });
  }

  addUser() {
    this.props.history.push('/add-user/_add');
  }

  render() {
    return (
      <div>
        <h2 className="text-center">Transaction List</h2>
        <div className="table-responsive">
          <table className="table table-striped table-bordered text-center">
            <thead>
              <tr>
                <th>Date</th>
                <th>Actions</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {this.state.users.map((user) => (
                <tr key={user.id}>
                  <td>{user.date}</td>
                  <td>{user.status}</td>
                  <td>
                    <div className="btn-group-vertical">
                      <button onClick={() => this.editUser(user.id)} className="btn btn-success">
                        Update
                      </button>
                      <button onClick={() => this.viewUser(user.id)} className="btn btn-info">
                        Details
                      </button>
                      <button onClick={() => this.deleteUser(user.id)} className="btn btn-danger">
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="text-center mt-3">
          <button onClick={this.addUser} className="btn btn-primary">
            Add New Transaction
          </button>
        </div>
      </div>
    );
  }
}

export default ListUserComponent;
