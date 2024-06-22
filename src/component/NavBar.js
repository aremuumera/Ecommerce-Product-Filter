
import React from 'react'
import {FiHeart} from 'react-icons/fi'
import {AiOutlineShoppingCart, AiOutlineUserAdd } from 'react-icons/ai'



const NavBar = ({handleInputChange, query}) => {
  return (
    <div>
      <nav>
        <div className="nav-container">
          <input
            type="text"
            name="text"
            id="text"
            className="search-input"
            placeholder="Enter your search shoes"
            onChange={handleInputChange}
            value={query}
          />
        </div>

        <div className="profile-container">
            <a href="#">
              <FiHeart className='nav-icons' />
            </a>
            <a href="#">
                <AiOutlineShoppingCart className='nav-icons'/>
            </a>
            <a href="#">
                <AiOutlineUserAdd className='nav-icons'/>
            </a>
        </div>
      </nav>
    </div>
  );
}

export default NavBar
