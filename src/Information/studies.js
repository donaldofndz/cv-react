import React, { Component } from "react";

class Studies extends Component {

  render() {

    if (this.props.data) {

      const { data } = this.props

      return (
        data.map((school, index) => (
          <div key={index} className="studies">
            <p> <span className="studies__topic"> University:</span> {school.univesityName}</p>
            <p> <span className="studies__topic"> Grade:</span> {school.grade}</p>
            <p> <span className="studies__topic"> Graduation Date:</span> {school.graduationDate}</p>
            {school.ID !== "" ? <p> <span className="studies__topic"> ID:</span> {school.ID}</p> : ''}
          </div>
        ))
      )
    } else {
      return (
        <p>Something fail</p>
      )
    }
  }

}

export default Studies; 