import React, { Component } from "react";

import "./App.css";
import Image from "./Image";

class App extends Component {
  render() {
    return (
      <div>
        <Image picture={"/Users/marciosilva/devmtn/react-drills/app-5/src/earth.jpg"} />
      </div>
    );
  }
}

export default App;
