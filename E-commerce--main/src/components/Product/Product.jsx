import React from 'react'
import { NavLink } from 'react-bootstrap'
import  DATA from '../../Data'

const Product = () => {
    const cardItem = (item) =>{

        return (

                <div className='card py-4 my-5' key={item.id} style={{width: '18rem'}}>
                    <img src={item.img} alt={item.title} className='card-img-top' />
                    <div className='card-body text-center'>
                        <h5 className='card-title'>{item.title}</h5>
                        <p className='lead'>{item.price}</p>
                        <NavLink to={`/products/${item.id}`} className='btn btn-outline-primary'>Buy Now</NavLink>
                    </div>
                </div>
        )
    }
  
  return(
    <div>
        <div className='container my-5'>
            <div className='row'>
                <div className='col-12 text-center'>
                    <h1>Products</h1>
                    <hr />
                </div>
            </div>
        </div>
        <div className='container'>
            <div className='row'>
                {DATA.map(cardItem)}
            </div>
        </div>
    </div>
  )
}

export default Product