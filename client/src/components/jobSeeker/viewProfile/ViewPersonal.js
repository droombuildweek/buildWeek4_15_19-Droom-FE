import React, { Component } from "react";
import { connect } from "react-redux";
import { getSeekerPersonal, deleteSeekerPersonal } from "../../../actions";

class ViewPersonal extends Component {
  componentDidMount() {
    this.props.getSeekerPersonal(this.props.auth.user.subject);
  }

  deletePersonal = e => {
    e.preventDefault();
    alert("Are you sure you want to delete your personal info?");
    this.props.deleteSeekerPersonal(this.props.auth.user.subject);
  };

  render() {
    return (
      <div>
        <h2>View Personal Info</h2>
        <button onClick={this.deletePersonal}>Delete Personal Info</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  seeker: state.seeker,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getSeekerPersonal, deleteSeekerPersonal }
)(ViewPersonal);
