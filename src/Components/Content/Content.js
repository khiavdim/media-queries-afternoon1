import React, { Component } from "react";
import "./Content.css";

class Content extends Component {
  render() {
    return (
      <div>
        <div className="Header">
          <div className="Welcome">Welcome To Our Studio!</div>
          <div className="Nice">It's Nice to Meet you</div>
          <div className="More">Tell Me Where</div>
        </div>
      </div>
    );
  }
}

export default Content;
