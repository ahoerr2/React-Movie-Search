import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import SearchRender from './components/SearchRender';
import dotenv from "dotenv";
dotenv.config();
function App() {
  return (
    <div className="App">
      <SearchRender/>
    </div>
  );
}

export default App;
