import React from 'react';
import Input from '../component/Input';

const Category = ({handleChange}) => {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>
      <div>
        <label  className="sidebar-label-container">
          <input onChange={handleChange} type="radio" name='test' value='' id='test1' />
          <span className="checkmark" style={{backgroundColor: '' }} ></span>All
        </label>
      </div>

      <Input
      handleChange={handleChange} 
        value="sneakers"
        title='Sneakers'
        name='test'
      />
       <Input
      handleChange={handleChange} 
        value="flats"
        title='Flats'
        name='test'
      />
       <Input
      handleChange={handleChange} 
        value="heels"
        title='Heels'
        name='test'
      />
    </div>
  );
};

export default Category;
