import React, { Component } from "react";

class Counter extends Component {
  //for single source of truth....to update the state of object and display on the frontend
  //   state = {
  //     value: this.props.counters.value
  //     //props contains data that we gibve to component..
  //     //state includes data that local orprivate to component.. others componenrt cannot access theat data props are readonly

  //     // image: "https://picsum.photos/500/300"
  //     //we will create an array of tags and render them with list..
  //     //tags: []
  //   };

  //handleIncrement = () => {
  //this.state.tags.push("tag"); ...this give an error...because this is undefined... we have no access to this
  //to solve this problem we can use arrow function of create constructor to handle the 'this'

  //this.state.tags.push("tags");
  //its not gonna work.. to amke this happen we have to use method from base class component setState()
  // where this will tell react that state object si changed and change will happen to ReactDOM
  //this.setState({ value: this.state.value + 1 });

  // let join = this.state.tags.concat("tags");
  // console.log(join);
  // this.setState({ tags: join });
  //};

  //   renderTags() {
  //     if (this.state.tags.length === 0) return <p>There are no tags!</p>;
  //     //every list should have a unique key to distinguish between them
  //     let x = Math.floor(Math.random() * 100);
  //     return (
  //       <ul>
  //         {this.state.tags.map(tag => (
  //           <li key={tag + x}>{tag}</li>
  //         ))}
  //       </ul>
  //     );
  //   }

  render() {
    //every REACT component has property called prop..
    //thisis basically plan javascript obj includes all attri thatset in counter
    //console.log("props", this.props);
    return (
      <div>
        {/* <img src={this.state.image} alt="noimage" /> */}
        <span className={this.getBadgeClass()}>{this.format()}</span>
        {/* <button className="btn btn-secondary btn-sm">Increment</button> */}
        {/* renderig the list using map function..inside map that is and array paramater*/}
        {/* <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>) }</ul> */}

        <button
          type="button"
          onClick={() => this.props.handleIncrement(this.props.counters)} //here we have to pass the refernce instead of calling function
          className="btn btn-secondary btn-sm"
        >
          INCREMENT
        </button>

        <button
          type="button"
          onClick={() => this.props.onDelete(this.props.counters.id)} //here we have to pass the refernce instead of calling function
          className="btn btn-danger btn-sm m-2"
        >
          DELETE
        </button>

        {/* {this.renderTags()} */}
        {/* {this.state.tags.length === 0 && "Please create a new tag."} */}
      </div>
    );
  }

  //created a method to append badge style attributes class in span
  getBadgeClass() {
    let classes = "badge m-2 badge-"; //declared a classes var that conatins the style attributes
    //console.log(this.props.counters.value, classes);
    classes += this.props.counters.value === 0 ? "warning" : "primary"; // here it checks if count===0 then give warning atrr otherwise primary attri
    return classes;
  }

  //creating another method
  format() {
    //used ocject destructuring..so here we are picking up the count property and setting to this.state and assinging to const object poperty count
    const { value: count } = this.props.counters;
    return count === 0 ? "zero" : count;
  }
}

export default Counter;
