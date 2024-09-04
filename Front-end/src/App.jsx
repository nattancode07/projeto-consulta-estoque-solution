import './App.css'
import Header from './Header/Header'
import { Outlet } from "react-router-dom"
import Home from './routs/Home'
import { useState } from 'react';
//import Products from './Products/Products';

function App() {

  const [query, setQuery] = useState('');
  const [filters, setFilters] = useState({ category: '', minPrice: 0, maxPrice: 1000 });
// element={<Products />} 

  return (
    <>
    <Header setQuery={setQuery} setFilters={setFilters}/>
    <Home query={query} filters={filters}/>  
    <Outlet />
    </>
  )
}

export default App