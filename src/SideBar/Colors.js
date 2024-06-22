import React from 'react';
import Input from '../component/Input';

const Colors = ({handleChange}) => {
  return (
    <div>
 <div>
      <h2 className="sidebar-title">Colors</h2>
      <div>
        <label  className="sidebar-label-container">
          <input onChange={handleChange} type="radio" name='test1' value='' id='test3' />
          <span className="checkmark all" style={{backgroundColor: '' }} ></span>All
        </label>
      </div>

      <Input
        handleChange={handleChange} 
        value="black"
        title='Black'
        name='test1'
        color='black'
      />
       <Input
        handleChange={handleChange} 
        value="red"
        title='Red'
        name='test1'
        color='red'
        
      />
       <Input
        handleChange={handleChange} 
        value="green"
        title='Green'
        name='test1'
        color='green'
      />
       <label  className="sidebar-label-container">
          <input onChange={handleChange} type="radio" name='test1' value='white' id='test1' />
          <span className="checkmark " style={{backgroundColor: 'white', border:'2px solid black'  }} >{""}</span>White
        </label>
    </div>
    </div>
  );
};

export default Colors;
