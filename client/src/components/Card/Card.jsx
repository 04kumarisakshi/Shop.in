import { Link } from "react-router-dom"
import "./Card.scss"

function Card({item}) {
  return (
    <Link className="link" to={`/product/${item.id}`}>
      <div className="card">
        <div className="image">
         
         
          <img
            src={
           item.img
            }
            alt=""
            className="secondImg"
          />
          </div>
          
        <h2>{item.title}</h2>
        <div className="prices">
          <h3>${item. oldPrize }</h3>
          <h3>${item.oldPrize}</h3>
        </div>
      </div>
    </Link>
  )
}

export default Card