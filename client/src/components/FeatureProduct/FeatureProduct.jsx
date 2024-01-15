import Card from "../Card/Card";
import "./FeatureProduct.scss"


const FeatureProduct  = ({ type }) => {
 const data=[
  {
    id:1,
    img:"https://imgs.search.brave.com/KhxfhFlacQGHf6AaOHDzyw7OxTBSoA5cyJYI3DUWTtA/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/bWFyaWFiLnBrL2Nk/bi9zaG9wL2ZpbGVz/L3JlYWR5X3RvX3dl/YXJfdGlsZS5qcGc_/aGVpZ2h0PTI0MDAm/dj0xNjc2NTMzMTE3" ,
   title:"traditional",
   isNew:true,
   oldPrize:19,
   prize:12,
  
  },
  {
    id:2,
    img:"https://imgs.search.brave.com/cZ_YZ3KPe1JbFsZIvt9pBm4AlFwXcyMn-ZAWr39mijk/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/bWFyaWFiLnBrL2Nk/bi9zaG9wL2ZpbGVz/LzA1LUhvbWVwYWdl/X0NvbGxlY3Rpb24t/S0lEUy5qcGc_aGVp/Z2h0PTI0MDAmdj0x/Njk5ODczMDE3" ,
   title:"Children",
   isNew:true,
   oldPrize:19,
   prize:12,
  
  },
  {
    id:3,
    img:"https://imgs.search.brave.com/uWq8JhOS9mtGmlXbL_TaTsCTq_-Qj5Ban3qhP2MNB4A/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0cv/MDEvaGFyZGxpbmVz/L1ZQQ3MvQlNQX1Bo/b25lc19aRmxpcDUu/SlBH" ,
   title:"Phone",
   isNew:true,
   oldPrize:70,
   prize:62,
  
  },
 ]
  return(
  <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas.
        </p>
      </div>
     <div className="bottom">
      {data.map((item)=>
  <Card item={item} key={item.id}/>
      
      )}
     </div>
    </div>
  );
};


export default FeatureProduct;