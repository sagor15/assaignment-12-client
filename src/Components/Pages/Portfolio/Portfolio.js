import React from 'react';
import own from "../../../asset/sagor.jpg"

const Portfolio = () => {
    return (
        <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img src={own} class="max-w-sm rounded-lg shadow-2xl" alt="" />
          <div>
            <h1 class="text-5xl font-bold">Sagor Ahammed</h1>
            <h5 className='text-success'>Junior Web Developer.</h5>
            <p class="py-6">I’m a Junior Web Developer. I can see myself in a top-ranking
             position in the web developing market. True that this market is growing higher day by day . But my skills are also growing as I am a very keen learning and technology lover person. That’s why I find this sector very 
            interesting and always work with my full enthusiasm.</p>
            <button class="btn btn-primary">started</button>
          </div>
        </div>
      </div>
    );
};

export default Portfolio;