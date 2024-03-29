import { useParams } from 'react-router-dom'
import List from  '../List/List'
import "./Product.scss"
import { useState } from 'react'

function Product() {
  const id =parseInt(useParams().id)
  const [maxPrice,setMaxPrice]=useState('')
  const [sort,setSort]=useState('')
  return (
   <div className="products">
    <div className="left">
      <div className="filterItem">
        <h2>Product Type</h2>
        <div className="inputItem">
          <input type="checkbox" id="1" value={1} />
          <label htmlFor="1">shoes</label>
        </div>
        <div className="inputItem">
          <input type="checkbox" id="2" value={2} />
          <label htmlFor="2">shirt</label>
        </div>
        <div className="inputItem">
          <input type="checkbox" id="3" value={2} />
          <label htmlFor="2">coats</label>
        </div>
        <div className="inputItem"></div>
      </div>
      <div className="filter">
        <h2>Filter by prize</h2>
        <div className="inputItem">
            <span>0</span>
            <input
              type="range"
              min={0}
              max={1000}
             onChange={(e)=>setMaxPrice(e.target.value)}
            />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filterItem">
          <h2>Sort by</h2>
          <div className="inputItem">
            <input
              type="radio"
              id="asc"
              value="asc"
              name="price"
             onChange={e=>setSort("asc")}
            />
            <label htmlFor="asc">Price (Lowest first)</label>
          </div>
          <div className="inputItem">
            <input
              type="radio"
              id="desc"
              value="desc "
              name="price"
              onChange={e=>setSort("desc")}
            />
            <label htmlFor="desc">Price (Highest first)</label>
          </div>
        </div>
      </div>
     <div className="right">
     <img
          className="catImg"
          src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
         
        />
        <List  cardId={id} maxPrice={maxPrice} sort={sort}/>
     </div>
   </div>
  )
}

export default Product