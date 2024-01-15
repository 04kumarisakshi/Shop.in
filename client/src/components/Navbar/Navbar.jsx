import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <header className="shadow px-3 py-2 mt-5 top-0 flex justify-between h-20 bg-white">
          
         <div className=" ml-16 border border-gray-300 rounded-full  shadow-md shadow-gray-300">
         <ul  className="flex gap-6 font-bold justify-center py-2 px-4 mt-2" >
                            <li>
                                <NavLink to="/product/clothing"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ?"text-orange-700":"text-gray-500"}border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Fashion
                                </NavLink>
                                </li><li>
                                <NavLink to ="/product/Appliance"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ?"text-orange-700":"text-gray-500"}border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                   Home Appliance
                                </NavLink>
                                </li><li>
                                <NavLink to="/product/Electronic"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ?"text-orange-700":"text-gray-500"}border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Electronics
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/product/Beauty"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ?"text-orange-700":"text-gray-500"}border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Beauty
                                </NavLink>
                            </li>
                            
                          
                        </ul>
         </div>
         <Link to="/" className="flex items-center">
                        <img
                            src="https://static.vecteezy.com/system/resources/previews/008/296/781/original/shopping-writing-design-on-white-background-free-vector.jpg"
                            className="m-3  h-11 px-24"
                            alt="Logo"
                        />
                    </Link>

                <div className="flex gap-2 border border-gray-300 rounded-full py-2 px-4 shadow-md shadow-gray-300">
<ul className="flex gap-6 font-bold justify-center  px-4 mt-3">
                         
               
                         <li>
                           
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
 <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg>

                       </li><li className="flex">
                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
 <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
</svg>

                          <span>0</span>
                          </li>  <li> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
 <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>

                           </li>  <Link to="#"
                            className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-3  mr-1 focus:outline-none"
                        >
                         Login
                        </Link> </ul>
                           
                 </div>

          
        </header>
    );
}



