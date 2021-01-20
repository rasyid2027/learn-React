// import React from 'react'
// import Ninjas from './Ninjas';

// function App() {
//   const ninjas = [
//     { name: 'Ryu', age: 30, belt: 'black', id: 1 },
//     { name: 'Yoshi', age: 20, belt: 'red', id: 2 },
//     { name: 'Crystal', age: 25, belt: 'blue', id: 3 }
//   ]
//   return (
//     <div className="App">
//       <h1>My First React App</h1>
//       <p>Welcome...!</p>
//       <Ninjas ninjas={ninjas}/>
//     </div>
//   );
// }

// export default App;

import React, { Component } from 'react'
import Ninjas from './Ninjas'

class App extends Component{
  state = {
    ninjas : [
      { name: 'Ryu', age: 30, belt: 'black', id: 1 },
      { name: 'Yoshi', age: 20, belt: 'red', id: 2 },
      { name: 'Crystal', age: 25, belt: 'blue', id: 3 }
    ]
  }
  render() {
    return (
      <div className="App">
        <h1>My First React App</h1>
        <p>Welcome...!</p>
        <Ninjas ninjas={this.state.ninjas}/>
      </div>
    )
  }
}

export default App