import React, { Component } from "react";
import ReactTypingEffect from "react-typing-effect";
import profilepic from "../images/sayem.jpg";
import Social from "../components/Social";
class Home extends Component {
  render() {
    return (
      <div className="condiv home">
        <img src={profilepic} className="profilepic" alt="img"></img>
        <br></br>
        <ReactTypingEffect
          className="typingeffect"
          text={["I am Md. Sayem", "I am a web developer"]}
          speed={150}
          eraseDelay={700}
        />
        <Social />
      </div>
    );
  }
}
export default Home;
