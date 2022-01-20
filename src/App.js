import React, {useState} from "react";
import './App.css';
import Counter from "./features/counter/counter";

import {Provider} from "react-redux";

import store from "./store";
import store2 from './store2'
function App() {
  const [currentStore, setStore] = useState(store)
  return (
    <div className="App">
      
    <Provider store={currentStore}>
      <Counter/>
      <button onClick={()=>setStore(store)}>Store 1</button>
      <button onClick={()=>setStore(store2)}>Store 2</button>
      </Provider>
    </div>
  );
}

export default App;
