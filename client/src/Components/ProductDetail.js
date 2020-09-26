import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
// import { getProduct } from "../../../products"

const ProductDetail = (props) => {
  const params = useParams()
  const product = props.products.find((product) => params.id === product._id)

  const { name, imgURL, description } = (product && product) || {}

  return (
    <div>
      {console.log(product)}

      <div>{name}</div>
      <div>{description}</div>
      <img src={imgURL} alt="img" />

      
    </div>
  )
}

export default ProductDetail
