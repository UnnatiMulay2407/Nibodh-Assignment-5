import React,{useState} from 'react';


import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Teamslider() {
// syntax
const [Xyz,setXyz] = useState([9,"po",{Lk:"po"}]);

// const [Var,Function] = useState(initialState) : syntax

console.log({state:Xyz});

const normal = () =>{
    setXyz(56)
}

var arr2 = [
    {link:"https://i.pinimg.com/originals/ef/2b/e7/ef2be7639c78f8a0101cb90b0848f1b5.jpg"},
    {link:"https://campdiaries.org/wp-content/uploads/2019/10/kid_2-207x300.png"},
    {link:"https://campdiaries.org/wp-content/uploads/2020/07/don-slideshow-2-300x300.jpg"},
    {link:"https://img.favpng.com/1/4/13/ballet-dancer-image-portable-network-graphics-ballet-dancer-png-favpng-VNgKRJCjQHUVQFGepg5BAV6Je.jpg"},
    {link:"https://campdiaries.org/wp-content/uploads/2019/10/kid_1-271x300.png"},
    {link:"https://image.shutterstock.com/image-vector/cartoon-color-sport-equipment-icon-260nw-1680121537.jpg"},
    {link:"https://thumbs.dreamstime.com/b/business-photo-shows-hand-written-text-personality-development-161334732.jpg"},
    {link:"https://gravatar.com/avatar/a46244ac403eb18d35c1942f274313d3?s=400&d=retro&r=x"},
]

const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    centerMode: true,
    focusOnSelect: true,
    slidesToShow: 5,
    slidesToScroll: 3,
    // arrows:true,
  };

return (
    // dom html tags /components reacts components
    <div>



<button onClick={normal} >state change</button>













         <Slider arrows={true} {...settings}>
     {
         arr2.map(data=>{

            return ( <div>
                <img className="slider-image-team" src={data.link} alt="" />
                      </div>)
         })
     }
     
      
    </Slider>
    </div>
)
}