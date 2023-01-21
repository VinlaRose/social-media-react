// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import React, {useState} from 'react';

function App(){

  const [count,updateCount] = useState(0);
  const [theme,updateTheme] = useState("blue")

  function decrement(){
    console.log("rendering");
    updateCount(prevcount => prevcount - 1);
    updateTheme("green");
    //updateCount(count-1);
  }

  function increment(){
    console.log("rendering");
    updateCount(count+1);
    updateTheme("red");
  }
  return (
    <>
    <button onClick={decrement}>-</button>
    <span>{count}</span>
    <span>{theme}</span>
    <button onClick={increment}>+</button>
    </>
  )
}

export default App;