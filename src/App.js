import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';

function App() {

  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');
  console.log(category);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      console.log(data);
      setProducts(data);
    }
    fetchProducts()
  }, [])


  return (
    <>
      <Navbar setSearch={setSearch} category={category} setCategory={setCategory} />
      <div className="productItems section-padding">
        {products.filter((value) => {
          if (search === ''){
            return value
          } else if (value.title.toLowerCase().includes(search.toLowerCase())){
            return value
          }
        }).filter((value) => {
          if (category === 'all'){
            return value
          } else if (value.category === category){
            return value
          }
        }).map((item) => (
          <div key={item.id} className="pItem">
            <img src={item.image} alt="product_img" />
            <h3>{item.title}</h3>
            <div className="itemInfo">
              <p>${item.price}</p>
              <button className="btn1">View Product</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
