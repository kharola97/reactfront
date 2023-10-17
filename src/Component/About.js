import React, { useState } from 'react'
import "./About.css"
import image1 from "../Images/slideshow1.jpg"
import image2 from "../Images/slideshow2.jpg"
import image3 from "../Images/slideshow3.jpg"
import image4 from "../Images/slidesjow4.jpg"
import image5 from "../Images/slideshow5.jpg"
import rightImage from "../Images/bgimage3.jpg"

const images = [{
  src:image1,
  heading:"Add your recipes and share them with others"
},
{
  src:image2,
  heading:"View the recipes added by other users"
},
{
  src:image3,
  heading:"Share the ingredients and flavours"
},
{
  src:image4,
  heading:"Comment and rate recipe  shared by others"
},
{
  src:image5,
  heading:"easy to follow instructions"
}
]
const About = () => {

  const [imageIndex, setImageIndex] = useState(0)
  const nextImage = () => {
    setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  const prevImage = ()=>{
    setImageIndex((prevIndex)=>(prevIndex - 1 + images.length) % images.length)
  }
  return (
    <div className='about-main'>
      <img src={rightImage} alt='empty'></img>
      <div className='left-about'>
       
        <h1>Things you can do </h1>
        <h3>{images[imageIndex].heading}</h3>
        <img src={images[imageIndex].src} alt={images[imageIndex].heading}></img>
        <div className='buttons-about'>
        <button className='prev-button' onClick={prevImage}>prev</button>
        <button className='next-button' onClick={nextImage}>Next</button>
        </div>
      </div>
      
    </div>
  )
}

export default About