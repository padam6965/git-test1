import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Item from '../components/Item';
import Navbar from '../components/Navbar';


const Items = () => {
  let all_items = useSelector(store => store.items.itemsdata)
  const [search, setSearch] = useState('')

  const filter_data = () => {
    // const data = all_items
    all_items = all_items.filter(item => item.item_name.toLowerCase().includes(search.toLowerCase()))
  }



  return (
    <>
      <Navbar />
      <div className='row bg-dark py-2'>
        <div className='col'></div>
        <div className='col-md-7'>
          <div className="form-floating">
            <input type="search" class="form-control" id="exampleFormControlInput1" placeholder="example" onChange={(event) => setSearch(event.target.value)} onKeyUp={filter_data()} />
            <label htmlFor="exampleFormControlInput1" class="form-label">Search</label>
          </div>
        </div>
        <div className='col'></div>
      </div>
      <div className='row'>
        <div className='col-md-3'>
          <div class="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style={{"width": "280px"}}>
            <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
              <span class="fs-4">Sidebar</span>
            </a>
            <hr />
            <ul class="nav nav-pills flex-column mb-auto">
              <li class="nav-item">
                <a href="#" class="nav-link active" aria-current="page">

                  Home
                </a>
              </li>
              <li>
                <a href="#" class="nav-link text-white">
                  
                  Dashboard
                </a>
              </li>
              <li>
                <a href="#" class="nav-link text-white">
                  Orders
                </a>
              </li>
              <li>
                <a href="#" class="nav-link text-white">
                  Products
                </a>
              </li>
              <li>
                <a href="#" class="nav-link text-white">

                  Customers
                </a>
              </li>
            </ul>
            <hr />
            <div class="dropdown">
              <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="https://github.com/mdo.png" alt="" width="32" height="32" class="rounded-circle me-2" />
                <strong>mdo</strong>
              </a>
              <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                <li><a class="dropdown-item" href="#">New project...</a></li>
                <li><a class="dropdown-item" href="#">Settings</a></li>
                <li><a class="dropdown-item" href="#">Profile</a></li>
                <li><hr class="dropdown-divider" /></li>
                <li><a class="dropdown-item" href="#">Sign out</a></li>
              </ul>
            </div>
          </div>


        </div>
        <div className='col-md-9'>

          <div className="container mt-5">
            <div className="row row-cols-1 row-cols-md-4 g-4">
              {all_items.map((individual_item, i) => {
                return <Item key={i} data={individual_item} />
              })}
            </div>
          </div>
        </div>
      </div>
    </>);
};

export default Items;

