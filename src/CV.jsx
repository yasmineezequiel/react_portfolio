import React, { Component } from "react"
import axios from "axios"
import CVCard from "./CVCard"
import { UndrawDesigner } from 'react-undraw-illustrations';


class CV extends Component {
  constructor() {
    super();
    this.state = {
      education: []
    };
  }
  componentDidMount() {
    axios.get('./src/data/education.json')
      .then(response => {
        this.setState({
          education: response.data
        })
      })
  }

  render() {
    const education = this.state.education
    let educationList

    if (education.length > 0) {
      educationList = education.map(education => {
        return (
        <div key={education.id}>
          <CVCard education={education} />
        </div>
        )
      })
    }

    return (
      <div className="ui main container">
        <div className="ui stackable two column grid">
          <div className="column">
          <UndrawDesigner/>
          </div>
          <div className="column">
               <h1 className="ui header">Experiences</h1>
          </div>
        </div>
        <div className="ui stackable four column grid">
          {educationList}
        </div>
      </div>
    )
  }
};

export default CV