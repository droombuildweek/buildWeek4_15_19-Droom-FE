import React, { Component } from "react";
import { connect } from "react-redux";
import { getEmployerJob, getEmployerJobs } from "../../actions";

class Jobs extends Component {
  componentDidMount() {
    this.props.getEmployerJobs();
    console.log(this.props);
  }

  render() {
    return (
      <div>
        <h2>Jobs</h2>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  employer: state.employer
});

export default connect(
  mapStateToProps,
  { getEmployerJob, getEmployerJobs }
)(Jobs);
