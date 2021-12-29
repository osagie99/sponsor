import React, {Component} from "react";
import CardComponent from "./components/cardComponent/CardComponent";

class App extends Component {
  constructor () {
    super();
    this.state = {
      fullname: '',
      email: '',
      amount: '',
      currency: '',
    }
  }
  render() {
    return (
      <div className="App">
        <CardComponent />
      </div>
    )
  }
}

export default App
