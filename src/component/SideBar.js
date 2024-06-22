
import React from 'react'
import { MdOutlineShoppingCart } from "react-icons/md";
import Category from '../SideBar/Category';
import Pricing from '../SideBar/Pricing';
import Colors from '../SideBar/Colors';


const SideBar = ({handleChange}) => {

  return (
    <div>
      <section className="sidebar">
        <div className="logo-container">
            <h1 className='' style={{alignContent: 'center'}}>Aremu Store <MdOutlineShoppingCart /></h1>
        </div>

        <Category handleChange={handleChange} />
        <Pricing handleChange={handleChange} />
        <Colors handleChange={handleChange} />
        
      </section>
    </div>
  )
}

export default SideBar
