import { useState } from "react";
import "./Slider.scss"

const Slider = () =>{
    const[curreantSlide,setCurrentSlide]= useState(0)
    const data= [
"https://listany-prod.s3.amazonaws.com/images/radhikajeweltech/kikjewelsbanner1920x650traditionalnecklacejewellery_1.png"
,"https://www.rajwadi.com/image/data/2023/November2023/Web%20banner/salwarkameez_1.jpg",
"https://golocad.com/wp-content/uploads/2023/05/website-easy-ux.jpg",
"https://www.creatopy.com/blog/wp-content/uploads/2018/11/full-screen-responsive-slider-1024x567.png"   
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
<img src={data[3]} alt="" />

    </div>
   
   <button onClick={previouspage}> <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
   </button> <button onClick={nextpage}><svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
   </button></div> 
  )
}

export default Slider