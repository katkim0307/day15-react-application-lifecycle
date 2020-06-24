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
        console.log(data);
        this.setState({
          items: data,
          isLoaded:true,
        })
      })
  }


  render() {
    return (
      <div></div>
    );
  };
};

export default Lifecycle;
