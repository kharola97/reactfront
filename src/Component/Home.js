import React from 'react'
import "./Home.css"
import { useNavigate } from 'react-router-dom'
const Home = () => {
    const Navigate = useNavigate()
    const handleclick = ()=>{
        Navigate("/login")
    }
  return (
    <div className='main-container'>
        <div className='right-container'> </div>
        <div className='left-container'>
            <h2>The best <span>recipe app</span>  in the world!</h2>
            <p> Want to explore the best recipes from around the world.. say no more we got you! see the best recipes from around the world with easy 
                instructions to try at home. You can also share your recipes with other users </p>
            <button className='explore-now' type='submit' onClick={handleclick}>Explore Now</button>
        </div>
    </div>
  )
}

export default Home