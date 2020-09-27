import React, { useState, useEffect } from "react"
import { Link, Redirect } from 'react-router-dom'
// import products from "../../products"
import "./Home.scss"

const Home = (props) => {
  const [redirect, setRedirect] = useState(false)
 const {products} = props


 const addNew = () => {
  setRedirect(true)
 }
  return (
    <div>
    {redirect && <Redirect to='/product/edit/*'/>}


      <div className="home">
        <h2 className="title">Sweetly Different</h2>
        <button onClick = {addNew}>Add New</button>
        <div className="products-wrapper">
          {products.map((product, index) => {
            
            return (
              <Link to={`/product/${product._id}`}>
                <div>
                  {/* <div className="product">{product.name}</div> */}
                  <img className="product-img" src={product.imgURL} alt="img" />
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Home
