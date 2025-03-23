import React from 'react'
import CreateProduct from '../product/CreateProduct'
import ListOfProducts from '../product/ListOfProducts'
import ListOfOrders from "../orders/ListOfOrders";

const ArtisnaDashboard = () => {
  return (
    <div>
      <CreateProduct />
      <ListOfProducts />
      <ListOfOrders />
    </div>
  )
}

export default ArtisnaDashboard
