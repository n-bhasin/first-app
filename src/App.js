import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import "./App.css";

class App extends Component {
  state = {
    //create an array of counter components
    //NOTE: Rule: the component owns the state should be the one to modifying it.
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleIncrement = counter => {
    //now we colne the array instead of makeing changes directly into it.
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter }; //clone the counter object that we receive
    counters[index].value++; //incrementing the vlaue of the counter
    this.setState({ counters });
    //console.log(counters);
    //console.log(this.state.counters[0]);
  };
  handleDelete = counterID => {
    //we not gonna delet the state.. we will create a new state and then setState to react
    //this will give all the counters except the selected one an then pass that counter to this.setState
    //console.log("id", counterID);
    const counters = this.state.counters.filter(c => c.id !== counterID);
    this.setState({ counters });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCounter={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
