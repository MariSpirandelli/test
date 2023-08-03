import React from 'react';
import logo from './logo.svg';
import './App.css';
import { DynamicContextProvider, DynamicWidget } from '@dynamic-labs/sdk-react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <DynamicContextProvider settings={{environmentId:'dca95954-81d8-4ef8-b20f-b1c3b6781cb6'}}>
          <DynamicWidget/>
        </DynamicContextProvider>
      </header>
    </div>
  );
}

export default App;
