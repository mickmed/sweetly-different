import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Components/Header'
import Home from './Components/Home'
import ProductDetail from './Components/ProductDetail'
import { Route, Switch, Redirect } from 'react-router-dom'

function App() {
  const [products, setProducts] = useState([])
  const [redirect, setRedirect] = useState(false)
  useEffect(() => {
    const getData = async () => {
      const resp = await fetch("http://localhost:3000")
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
        <Route path='/product/:id'>
          <ProductDetail products={products}/>
        </Route>
      </Switch>
      

    </div>
  );
}

export default App;
