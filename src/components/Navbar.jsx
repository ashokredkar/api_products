import React from 'react';
import './Navbar.css';

const Navbar = ({ setSearch, category, setCategory }) => {
  return (
    <div className="navbar section-padding">
      <div className="sort">
        <p>Select Category:</p>
        <select value={category} name="price" onChange={e => setCategory(e.target.value)}>
          <option value='all' defaultChecked>All</option>
          <option value="women's clothing">Women's Clothing</option>
          <option value="men's clothing">Men's Clothing</option>
          <option value="jewelery">Jewelery</option>
          <option value="electronics">Electronics</option>
        </select>
      </div>
      <div className="search">
        <input type="search" placeholder='Search Products by Title...' onChange={e => setSearch(e.target.value)} />
      </div>
    </div>
  )
}

export default Navbar