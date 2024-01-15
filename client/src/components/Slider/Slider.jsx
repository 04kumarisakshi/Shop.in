import { useState } from "react";
import "./Slider.scss"

const Slider = () =>{
    const[curreantSlide,setCurrentSlide]= useState(0)
    const data= [
      "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",

 
 ];
 const previouspage=()=>{
    setCurrentSlide(curreantSlide == 0 ? 2 : (prev) => prev-1);
 };
 const nextpage = () =>{
    setCurrentSlide(curreantSlide == 2 ? 0 :(prev) =>prev +1);
 }
  return (



  <div className="Slider">
    <div className="Container" style={{transform:`translateX(-${curreantSlide *100}vw)`}}>
    <img src={data[0]} alt="" /> 
    <img src={data[1]} alt="" />
    <img src={data[2]} alt="" />
   

    </div>
    <div className="icons">
   <div  className="icon" onClick={previouspage}> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
</svg>

   </div> <div className="icon"  onClick={nextpage}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
</svg>

   </div>
   </div> 
   </div>
  )
}

export default Slider