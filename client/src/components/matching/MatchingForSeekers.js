import React, { Component } from "react";
import Slider from "react-slick";
import { connect } from "react-redux";
import { getEmployerProfile, getEmployerProfiles } from "../../actions";

class MatchingForSeekers extends Component {
  componentDidMount() {
    this.props.getEmployerProfiles();
    console.log(this.props);
  }

  render() {
    const settings = {
      arrows: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    if (this.props.employer.employerProfiles.length === 0) {
      return <p>Loading</p>;
    }
    return (
      <div>
        <h2>Job Seeker Matching</h2>
        <Slider {...settings}>
          {this.props.employer.employerProfiles.companies.map(company => {
            return (
              <div key={company.id}>
                <h3>{company.companyName}</h3>
                <p>{company.companyDescription}</p>
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  seeker: state.seeker,
  employer: state.employer
});

export default connect(
  mapStateToProps,
  { getEmployerProfile, getEmployerProfiles }
)(MatchingForSeekers);
