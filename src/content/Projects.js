import React, { Component } from 'react'

export default class Projects extends Component {
  render() {
    return (
      <div className="condiv">
        <h1 className="subtopic">Simple Projects</h1>
        <div>
          <i
            class="fab fa-react"
            style={{ fontSize: 40, color: "#00bfff", float: "left" }}
          ></i>
          <h3 style={{ float: "left" }}>React Projects</h3>
        </div>
        <h3 style={{ clear: "left" }}>
          .................................................
        </h3>
        <ul className="projectcss">
          <li>
            <a href="https://react-resort-example-demo.netlify.app/">
              Beach Resort
            </a>
          </li>
          <li>
            <a href="https://restaurants-demo.netlify.app/home">Restaurants</a>
          </li>
          <li>
            <a href="https://robofriends-demo-project.netlify.app/">
              RoboFriends
            </a>
          </li>
          <li>
            <a href="https://react-todo-list-project-test.netlify.app/">
              Todo-List
            </a>
          </li>
        </ul>
        <br></br>
        <div>
          <i
            class="fab fa-python"
            style={{ fontSize: 40, color: "#0cb3f5", float: "left" }}
          ></i>
          <h3 style={{ float: "left" }}>Djago Projects</h3>
        </div>
        <h3 style={{ clear: "left" }}>
          .................................................
        </h3>
        <ul className="projectcss">
          <li>
            <a href="https://real-estate-demo-prac.herokuapp.com/">
              Real Estate Company
            </a>
          </li>
          <li>
            <a href="https://ecommerce-demo-prac.herokuapp.com/">Ecommerce</a>
          </li>
        </ul>
      </div>
    );
  }
}
