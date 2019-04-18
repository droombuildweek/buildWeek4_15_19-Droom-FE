import React, { Component } from "react";
import Slider from "react-slick";
import { connect } from "react-redux";
import {
  getSeekerPersonal,
  getSeekerExperience,
  getSeekerEducation,
  getSeekerSkills
} from "../../actions";

class MatchingForCompanies extends Component {
  componentDidMount() {
    this.props.getSeekerPersonal(this.props.auth.user.subject);
    this.props.getSeekerExperience(this.props.auth.user.subject);
    this.props.getSeekerEducation(this.props.auth.user.subject);
    this.props.getSeekerSkills(this.props.auth.user.subject);
  }

  addMatch = e => {};

  render() {
    const settings = {
      arrows: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    if (this.props.seeker.seekerProfile.length === 0) {
      return <p>Loading</p>;
    }
    return (
      <div>
        <h2>Employer Matching</h2>
        <Slider {...settings}>
          {/* {this.props.employer.seekerProfile.companies.map(company => {
            return (
              <div key={company.id}>
                <h3>{company.companyName}</h3>
                <p>{company.companyDescription}</p>
                <button onClick={this.addMatch}>Match</button>
              </div>
            );
          })} */}
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
  {
    getSeekerPersonal,
    getSeekerExperience,
    getSeekerEducation,
    getSeekerSkills
  }
)(MatchingForCompanies);
