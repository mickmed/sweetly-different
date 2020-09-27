import React, { useState, useEffect } from "react"
import { useParams, Redirect } from "react-router-dom"
// import { getProduct } from "../../../products"

const ProductDetail = (props) => {
  const [redirect, setRedirect] = useState(false)
  const params = useParams()
  const product = props.products.find((product) => params.id === product._id)

  const {_id, name, imgURL, description } = (product && product) || {}

  const editItem = () => {
    setRedirect(true)
  }
  const deleteItem = async(id)=> {
    await fetch(`http://localhost:3000/api/products/${id}`, {
      method: "DELETE",
     
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((response) => response.json())
      .then((json) => console.log(json))
      .catch((err) => console.log(err))
  }
  
  return (
    
    <div>
      {redirect && <Redirect to={`/product/edit/${params.id}`}/>}

      <div>{name}</div>
      <div>{description}</div>
      <img src={imgURL} alt="img" />

      <button onClick={editItem}>edit item</button>
      <button onClick={()=>deleteItem(_id)}>delete item</button>

    </div>
  )
}

export default ProductDetail
