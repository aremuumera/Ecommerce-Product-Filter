

import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { BsFillBagFill, BsFillBagHeartFill } from 'react-icons/bs'
import Card from '../component/Card'

const Product = ({result}) => {
  return (
    <div>
      <section className='card-container'>
        {result}
      </section>
    </div>
  )
}

export default Product
