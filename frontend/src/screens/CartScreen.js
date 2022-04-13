import React, { useEffect } from 'react'
import { Link, useParams, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'
import Message from '../components/Message.js'
import { addToCart } from '../actions/cartActions'

const CartScreen = ({ history }) => {
  const { id } = useParams()
  const productId = id
  const location = useLocation()
  const query = new URLSearchParams(location.search)
  const qty = query.get('qty')
  console.log(qty)
  const dispatch = useDispatch()

  useEffect(() => {
    if(productId) {
      dispatch(addToCart(productId, qty))
    }

  }, [dispatch, productId, qty])

  return <div>Cart</div>
}

export default CartScreen
