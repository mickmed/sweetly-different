import React, { useState, useEffect } from "react"
import { useParams, Redirect } from "react-router-dom"
import "./EditProduct.scss"
import apiUrl from './apiConfig'


const EditProduct = (props) => {
  const params = useParams()
  const [redirect, setRedirect] = useState(false)
  const [state, setState] = useState({ name: '', description:'', imgURL: ''})

  const product = props.products.find((product) => params.id === product._id)
  const {toggle, setToggle} = props
  console.log(apiUrl)

  useEffect(() => {
    console.log('use effect')
    setState({ name: product && product.name, description: product && product.description, imgURL: product && product.imgURL})
  }, [product])
  const handleChange = (e) => {
    console.log(e.target.name, e.target.value)
    setState({ ...state, [e.target.name]: e.target.value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()

    const getData = async () => {
      let data = {
        name: state.name,
        description: state.description,
        imgURL: state.imgURL
      }
      console.log(data)
      if (params.id === "*") {
        await fetch(`${apiUrl}/products`, {
          method: "POST",
          body: JSON.stringify(data),
          headers: { "Content-type": "application/json; charset=UTF-8" },
        })
          .then((response) => response.json())
          .then((json) => console.log(json))
          .then(()=>setToggle(!toggle))
          .catch((err) => console.log(err))
      } else {
        console.log("not *")
        await fetch(`${apiUrl}/products/${params.id}`, {
          method: "PUT",
          body: JSON.stringify(data),
          headers: { "Content-type": "application/json; charset=UTF-8" },
        })
          .then((response) => response.json())
          .then((json) => console.log(json))
          .then(()=>setToggle(!toggle))

          .catch((err) => console.log(err))
      }
    }
    getData()
    setRedirect(true)
    // setToggle(!toggle)

  }

  return (
    <div className="edit-product">
      {redirect && <Redirect to='/'/>}
      <form className="edit-form" onSubmit={handleSubmit}>
       
        <input
          name="name"
          type="text"
          value={state.name}
          onChange={handleChange}
          placeholder='name'
        />
        <textarea
          name="description"
          type="text"
          value={state.description}
          onChange={handleChange}
          placeholder='description'
        />
        <input
          name="imgURL"
          type="text"
          value={state.imgURL}
          onChange={handleChange}
          placeholder='imgURL'
        />
        <button>add item</button>
      </form>
    </div>
  )
}

export default EditProduct
