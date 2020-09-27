import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Components/Header'
import Home from './Components/Home'
import ProductDetail from './Components/ProductDetail'
import EditProduct from './Components/EditProduct'
import { Route, Switch } from 'react-router-dom'

function App() {
  const [products, setProducts] = useState([])
  useEffect(() => {
    const getData = async () => {
      const resp = await fetch("http://localhost:3000/api/products")
      // console.log(await resp.json())
      const data = await resp.json()
      console.log(data)
      setProducts(data)
      
    }
    getData()
  }, [])
 
  
  return (
    <div className="App">
     
  
      <Header/>
    

      <Switch>
        <Route exact path='/'>
          <Home products={products}/>
        </Route> 
      
        <Route exact path='/product/edit/:id'>
          <EditProduct products={products}/>
        </Route>
          <Route path='/product/:id'>
          <ProductDetail products={products}/>
        </Route>
      </Switch>
      

    </div>
  );
}

export default App;
