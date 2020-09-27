import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import "./EditProduct.scss"

const EditProduct = (props) => {
  const params = useParams()

  const product = props.products.find((product) => params.id === product._id)

  console.log(params)
  console.log(props, product)
  const [value, setValue] = useState({ name: "", value: "" })
  const [state, setState] = useState({ name: "", description: "" })

  useEffect(() => {}, [])
  const handleChange = (e) => {
    console.log(e.target.name, e.target.value)
    setState({ ...state, [e.target.name]: e.target.value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()

    const getData = async () => {
      // const resp = await fetch("http://localhost:3000")
      // // console.log(await resp.json())
      // const data = await resp.json()
      // console.log(data)
      // setProducts(data)
      let _data = {
        name: state.name,
        description: state.description,
      }
      if (params.id === "*") {
        await fetch("http://localhost:3000/api/products", {
          method: "POST",
          body: JSON.stringify(_data),
          headers: { "Content-type": "application/json; charset=UTF-8" },
        })
          .then((response) => response.json())
          .then((json) => console.log(json))
          .catch((err) => console.log(err))
      } else {
        console.log('not *')
        await fetch(`http://localhost:3000/api/products/${params.id}`, {
          method: "PUT",
          body: JSON.stringify(_data),
          headers: { "Content-type": "application/json; charset=UTF-8" },
        })
          .then((response) => response.json())
          .then((json) => console.log(json))
          .catch((err) => console.log(err))
      }
    }
    getData()
  }

  return (
    <form className="edit-form" onSubmit={handleSubmit}>
      <div>punk</div>
      <input
        name="name"
        type="text"
        value={(state.name || product && product.name)}
        onChange={handleChange}
      />
      <input
        name="description"
        type="text"
        value={(state.description || product && product.description) }
        onChange={handleChange}
      />
      <button>add item</button>
    </form>
  )
}

export default EditProduct
