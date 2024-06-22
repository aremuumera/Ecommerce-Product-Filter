
import React from 'react'
import Button from './Button'

const Recommended = ({handleButtonsChange, onClickHandler}) => {
  return (
    <div>
      <div className="">
        <h2 className='recommended-title' >Recommended</h2>
        <div className="recommended-flex">
          <Button onClickHandler={handleButtonsChange} value='' title='All Products' />
          <Button onClickHandler={handleButtonsChange} value='Nike' title='Nike' />
          <Button onClickHandler={handleButtonsChange} value='Adidas' title='Adidas' />
          <Button onClickHandler={handleButtonsChange} value='Puma' title='Puma' />
          <Button onClickHandler={handleButtonsChange} value='Vans' title='Vans' />

        </div>
      </div>
    </div>
  )
}

export default Recommended
