import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state: {
      latitude: null
    };
  }

  //React says we have to define render
  render() {
    window.navigation.geolocation.getCurrentPosition(
      position => console.log(position),
      err => console.log(err)
    );
    return <div>Latitude:</div>
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));