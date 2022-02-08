import React from 'react';
import { useDispatch } from 'react-redux';
// import './item.css'
import { Link } from 'react-router-dom';



const Item = (prop) => {
   // const value=prop.data
  const { item_name, item_price, item_image } = prop.data
  const dispatch = useDispatch()
  return (
    <>
      <div className="col">
        <div className="card mb-3">
          <img src={item_image} title={item_name} className="card-img-top" alt={item_name} style={{'height':'200px'}} />
          <div className="card-body overflow-hidden text-center">
            <h5 className="card-title text-nowrap" title={item_name}>{item_name}</h5>
            <h4 className="card-title">{item_price}</h4>
            <button className='btn btn-primary' data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={()=>dispatch({ type: 'ADD_TO_CART',payload: prop.data})}>Add to Cart</button>
          </div>
        </div>
      </div>

    {/* Model */}
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Cart Update</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        {item_name} has been added to cart.
      </div>
      <div class="modal-footer">
       <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Keep Shopping</button>
        <Link to='/cart'><button type="button" class="btn btn-primary" data-bs-dismiss="modal">View Cart</button></Link>
      </div>
    </div>
  </div>
</div>
     
    </>
  );
};

export default Item;
