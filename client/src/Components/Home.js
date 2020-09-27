import React, { useState, useEffect } from "react"
import { Link, Redirect } from "react-router-dom"
// import products from "../../products"
import "./Home.scss"

const Home = (props) => {
  const [redirect, setRedirect] = useState(false)
  const { products } = props

  const addNew = () => {
    setRedirect(true)
  }
  return (
    <div>
      {redirect && <Redirect to="/product/edit/*" />}

      <div className="home">
        <div className='add-new-btn'>
          <button onClick={addNew}>Add New</button>
        </div>
        <div className="products-wrapper">
          {products.map((product, index) => {
            return (
              <Link to={`/product/${product._id}`} key={index}>
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
