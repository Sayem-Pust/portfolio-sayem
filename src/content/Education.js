import React, { Component } from "react";
import Widecard from "../components/Widecard";
class Education extends Component {
  render() {
    return (
      <div className="condiv">
        <h1 className="subtopic">My Education</h1>
        <Widecard
          title="Information and Communication Engineering"
          where="Pabna University of Science and Technology"
          from="June 2015"
          to="December 2019"
        />
        <Widecard
          title="HSC"
          where="Dr. Mahbubur Rahman Mollah College"
          from="2012"
          to="2014"
        />

        <Widecard
          title="SSC"
          where="A k High School and College"
          from="2010"
          to="2012"
        />
        <h1 className="subtopic">Organization</h1>
        <Widecard
          title="Member"
          where="Engineering Students’ Association of Bangladesh "
        />

        <Widecard
          title="Member"
          where="Electrical and Electronics Engineers (IEEE) "
        />
      </div>
    );
  }
}
export default Education;
