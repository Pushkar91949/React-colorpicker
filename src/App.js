// src/App.js
import React from 'react';
import './App.css';
import ColorPicker from './ColorPicker';

function App() {
  const colors = [
    '#FF5733',
    '#3498DB',
    '#27AE60',
    '#F1C40F',
    '#8E44AD',
    '#FFA726',
    '#00D084',
    '#FF3D00',
    '#12CBC4',
    '#006266',
    '#EE5253',
    '#F39C12',
    '#1B1464',
    '#D980FA',
    '#833471',
    '#4CD137',
    '#0097E6',
    '#8C7AE6',
    '#DFFF00', // New color
  ];
  
  

  return (
    <div className="App">
      <h1>Color Picker App</h1>
      <ColorPicker colors={colors} />
    </div>
  );
}

export default App;
