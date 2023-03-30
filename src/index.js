import React, { useState } from 'react';
import ReactDOM from 'react-dom';

// write your Color component here

const Color = (props) => {
  const classColor =
    props.color === props.selectedColor
      ? props.color + ' selected'
      : props.color;

  return (
    <div
      className={classColor}
      onClick={() => props.selectColor(props.color)}
    ></div>
  );
};

const Picker = () => {
  const [selectedColor, setSelectedColor] = useState('');

  const selectColor = (colorName) => {
    setSelectedColor(colorName);
  };

  return (
    <div id='container'>
      <div id='navbar'>
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>
      <div id='colors-list'>
        <Color
          color='red'
          selectColor={selectColor}
          selectedColor={selectedColor}
        />
        <Color
          color='blue'
          selectColor={selectColor}
          selectedColor={selectedColor}
        />
        <Color
          color='green'
          selectColor={selectColor}
          selectedColor={selectedColor}
        />
      </div>
    </div>
  );
};

ReactDOM.render(<Picker />, document.getElementById('app'));
