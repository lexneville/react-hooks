import React, {useState} from 'react';
import './App.css';

function App() {
  // 'consoles' will be the name of state, 'setConsoles' will be used to set the state. 
  const [gameConsoles, setGameConsoles] = useState(
    [
      {
        name: "PS4",
        price: 199,
        releaseYear: 2013,
      },  

      {
        name: "XBox-One",
        price: 299,
        releaseYear: 2015
      },

      {
        name: "Switch",
        price: 199,
        releaseYear: 2017,
      },
    ]
  )
//
  const addDiscount = () => {
    const newArray = [...gameConsoles];
    newArray[0].price = 100;
    setGameConsoles(newArray);
  }
    

  // const addDiscount = (array, name) => {
  //   objectToChange = {}
  //   console.log("add discount");
  //   findArrayElement = (array, name) => {
  //     array.find((element) => {
  //       objectToChange = element.title
  //     })
  //   }

  //   setGameConsoles(
  //     {

  //     }
  //   )
  // }

  return (
    <div className="App">
      {gameConsoles.map( (device) => {
        return <h1>The {device.name} was released in {device.releaseYear}, costing £{device.price}</h1>
      })}
      <button id="btn" onClick={addDiscount/*(gameConsoles, XBox-One)*/}>Add PS4 Discount</button>
    </div>
  );
}

export default App;
