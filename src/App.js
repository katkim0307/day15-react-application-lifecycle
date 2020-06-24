import React, {Component} from 'react';
//import { render } from '@testing-library/react';

class Lifecycle extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      isLoaded: false,
    };
  };

  // Built-in React Method
  // Allows us to attach the data we get from the API call to the state.
  // When we change the state, the component render() will execute again
  // and show the changes made to the DOM.
  componentDidAmount() {
    // "fetch" the data from a specific URL, "then" process the data
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        return res.json();
      })
      .then(data => {
        // Check whether data is an array or not
        console.log(Array.isArray(data));
        console.log("Fetched Data: ", data);
        this.setState({
          items: data,
          isLoaded:true,
        })
      })
  }

  // 1. Deconstruct the state keys
  // 2. Create a parent div className="App" 
  // 3. Create a child div className="Names" with lists
  // 4. Render Data (array) as a list {items.map(item => (<li key={item}>{item}</li>))}
  render() {
    let {isLoaded, items} = this.state;
    return (
      <div className="App">
        <div className="Names">
          <ul>
          {items.map(item => <li>{item}</li>)}
          </ul>
        </div>
      </div>
    );
  };
};

export default Lifecycle;
