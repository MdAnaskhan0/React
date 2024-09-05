import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Cart from './Components/Cart';
import Person from './Components/Person';
import Data from './Data.json';

function CreatCart() {
  const [Data2, setData] = useState(false)

  const itemList = Data.map((item, index) => (
    item.price > 650 ? (
      <Cart key={index} cartTitle={item.Title} cartDesc={item.Description} price={item.price} />
    ) : null
  ));

  const personList = PersonData.map((item, index) => (
    <Person key={index} fName={item.firstName} lName={item.lastName} age={item.age} email={item.email} />
  ));



  return (
    <div>
      {itemList}
      {personList}

      {Data2&&<p>Hello</p>}
      <button onClick={()=>setData(!Data2)}>Click</button>


    </div>
  );
}

export default CreatCart;
