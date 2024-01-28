import "./Categories.scss"
import { Link } from "react-router-dom"
function Categories() {
  return (
   <div className="categories">
    <div className="box">
      <div className="row">
        <img src="https://imgs.search.brave.com/Qq2EBGjuIYsz45N0V0xY8uVlCAplaYUVG9NJldEiukk/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTEy/Nzc1MzI2MS9waG90/by9hZnJvLWZhc2hp/b24tbW9kZWwuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPXJZ/b3dkc1M4Z3RFYUlE/RVBBWURhRk5TdHFZ/YTJhOFV3Q1RpX2JO/dndrdm89" alt="" />
       
        <button>
            <Link className="link" to="/product">
            Women
            </Link>
          </button>
         </div>
      <div className="row">
          <img src="https://imgs.search.brave.com/9HfvKwAFCCumSqWuVBb4nI--low5fCrtyhX9c3EWb1U/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jbGFz/c3ltZW5jb2xsZWN0/aW9uLmNvbS9jZG4v/c2hvcC9maWxlcy9M/Uk1fRVhQT1JUXzIw/MTgwMjE0XzE0NDE0/M182MDB4NjAwLmpw/Zz92PTE2MTMxNzIy/MTM" alt="" />
        
          <button>
            <Link className="link" to="/product">
            Accesories
            </Link>
          </button>
         </div>
    </div>
    <div className="box">
      <div className="row">
   
      <img src="https://imgs.search.brave.com/76ARRJtj9lj_G0tW3_GIW-cc2p3V66iJfbTz_uHwmdo/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2ZmLzJh/LzFlL2ZmMmExZWY5/OWM0MTg5YzY0ZmM0/OTIzNTIyZTU4YzI5/LmpwZw" alt="" />
      <button>
            <Link className="link" to="/product">
            Men
            </Link>
          </button>
</div>
     
    </div>
    <div className="box large-box">
    <div className="row">  
    <div className="col">
    <div className="row"> 
        <img src="https://imgs.search.brave.com/N2WqMnoelepYSsmxr7x77wnhrtOBOnCkwsTh2aCBjM0/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTMy/NTYzMjI4Ny9waG90/by93b21lbnMtZmxv/YXRpbmctbGVhdGhl/ci1iYWcuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPUVYYWVx/OU5CLUNESkVhOTJx/TGxESzM2UktjODBu/QS1PejZzaE4zZTNo/c0E9" alt="" />
        <button>
            <Link className="link" to="#">
              men
            </Link>
          </button>
       </div>
          </div>
        <div className="col">
        <div className="row"> 
          <img src="https://imgs.search.brave.com/mB1q404jLjD98t2empWKVg1Q7ZMjg0XI_gi3FacrJo0/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/bWFyaW9iYWRlc2N1/LmNvbS9jZG4vc2hv/cC9maWxlcy9vdDhj/NndzdjNwbW9yczZs/d3ZwZV9mYzE2NjNi/MC0xODVmLTQ5MDEt/ODljNy03ZTc2YTE3/Mzc3MjcuanBnP3Y9/MTY5ODQyMDczNSZ3/aWR0aD0xOTQ2" alt="" /></div>
       
       {" "}   <button>
            <Link className="link" to="#">
         buety
            </Link>
          </button>
     
          </div> </div>
      <div className="row">
        <img src="https://imgs.search.brave.com/-JdhJPRcuddGsfaxJOpAz0R54Tp4UCZr5Htnvw5VYRc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/a2l0Y2hlbmNvbGxl/Y3Rpb24uY28udWsv/U2hvcC9SZXNvdXJj/ZXMvS2l0Y2hlbkNv/bGxlY3Rpb25DYXRh/bG9nL0tpdGNoZW5S/YW5nZS9NYWluaW1h/Z2VzTGFyZ2UvTGFu/Z3Rvbl9JbmZyYW1l/X1BhaW50ZWQvTGFu/Z3RvbiUyMFBhaW50/XzEuanBnP3dpZHRo/PTM3MA" alt="" />
        <button>
            <Link className="link" to="#">
            kitchen
            </Link>
          </button>
        </div>
    </div>
    </div>
  
  )
}

export default Categories