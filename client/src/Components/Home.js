import React, { useState, useEffect } from "react"
import { Link } from 'react-router-dom'
// import products from "../../products"
import "./Home.scss"

const Home = (props) => {
 const {products} = props

  return (
    <div>
      <div className="home">
        <h2 className="title">Sweetly Different</h2>
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
