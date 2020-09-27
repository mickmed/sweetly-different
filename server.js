const express = require("express")
const bodyParser = require("body-parser")
const logger = require("morgan")
const cors = require("cors")
const productsRoutes = require("./routes/products")
const db = require('./db/connection')
const PORT = process.env.PORT || 3000

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(logger("dev"))

app.use("/api", productsRoutes)

db.on("error", console.error.bind(console, "MongoDB connection error:"))

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})

// app.get('/', (req, res) => {
//   res.json(products)
// })

// app.get('/products', async(req, res)=> {
//   res.json(products)
// })

// app.get('/products/:id', async(req, res)=> {
//   const id = req.params.id
//   const product = products.filter(product => product._id === id)[0]
//   res.json(product)
// })

// app.post('/products', async(req, res)=>{
//   const product = req.body
//   products.push(product)
//   res.json(products)
// })

// app.put('/products/:id', async(req, res)=> {
//   const id = req.params.id
//   const productIndex = products.findIndex(product => product._id === id)
//   const product = {...products[productionIndex], ...req.body}
//   products.splice(productionIndex, 1, product)
//   res.json(products)
// })

// app.delete('/products/:id', async(req,res)=>{
//   const id = req.params.id
//   const productIndex = products.findIndex(product=>product_id === id)
//   res.json(products)
// })
