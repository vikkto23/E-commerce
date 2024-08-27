import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const CartBtn = () => {
  // Retrieve the cart items from the Redux state
  const state = useSelector((state) => state.addItem || []);

  return (
    <div>
      <NavLink to='/cart' className='btn btn-outline-primary ms-2'>
        {/* Use optional chaining to avoid errors when state is undefined */}
        <span className='fa fa-shopping-cart me-1'>
          Cart ({state.length || 0})
        </span>
      </NavLink>
    </div>
  );
};

export default CartBtn;
