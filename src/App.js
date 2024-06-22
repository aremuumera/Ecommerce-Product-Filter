
import { useState } from 'react';
import './App.css';
import Product from './Product/Product';
import NavBar from './component/NavBar';
import Recommended from './component/Recommended';
import SideBar from './component/SideBar';

// database
import Products from './db/data';
import Card from './component/Card';

function App() {

    const [theSelectedCategory, setTheSelectedCategory] = useState(null)

      //----------------------------Input Filter------------------
    const [query, setQuery] = useState('');

    const handleInputChange = (e) =>{
      setQuery(e.target.value)
    }


    //----------------------------Radio Filter------------------
    const handleRadioChange = (e) => {
        setTheSelectedCategory(e.target.value);
    }

  //----------------------------Buttons Filter------------------
    const handleButtonsChange = (e) => {
      setTheSelectedCategory(e.target.value);
    }


  //---------------------------- Overall Input Filtering ------------------

    const filteredData = (Products, selected, query ) =>{
      let filteredProducts = Products;

      // Filtering Input Items
      if(query){
        //logic for filtering the products via Input field for the product title
        const filteredItems = Products.filter(product => product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !== -1) ;

        filteredProducts = filteredItems
      }

    //----------------------------Selected Filter------------------
      if(theSelectedCategory){
        // logic for filtering the data via the category, color, Price for the product IN (Category, color, company, newPrice, title )
        filteredProducts = filteredProducts.filter(({category, color, company, newPrice, title}) => 
          category === theSelectedCategory || 
        color === theSelectedCategory || 
        company === selected ||
        newPrice === theSelectedCategory ||
        title === theSelectedCategory
      )};

      return filteredProducts.map(({img, title,  star, reviews,newPrice, prevPrice}) => (
        <Card 
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          newPrice={newPrice}
          prevPrice={prevPrice}
        />
      ));
    }

  const result = filteredData(Products, theSelectedCategory, query)

  return (
    <div className="App">
      <SideBar  handleChange={handleRadioChange} />
      <NavBar handleInputChange={handleInputChange} query={query}/>
      <Recommended handleButtonsChange={handleButtonsChange}/>
      <Product result={result} />
      
    </div>
  );
}

export default App;
