import React from 'react';
import Input from '../component/Input';

const Pricing = ({handleChange}) => {
  return (
    <div>
      <div>
      <h2 className="sidebar-title">Pricing</h2>
      <div>
        <label  className="sidebar-label-container">
          <input onChange={handleChange} type="radio" name='test2' value='' id='test2' />
          <span className="checkmark" style={{backgroundColor: '' }} ></span>All
        </label>
      </div>

      <Input
        handleChange={handleChange} 
        value="50"
        title='$0 - $50'
        name='test2'
      />
       <Input
        handleChange={handleChange} 
        value="50"
        title='$50 - $100'
        name='test2'
      />
       <Input
        handleChange={handleChange} 
        value="50"
        title='$100 - $150'
        name='test2'
      />
      <Input
        handleChange={handleChange} 
        value="50"
        title='Over $150'
        name='test2'
      />
    </div>
    </div>
  );
};

export default Pricing;
