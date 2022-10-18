import React from 'react'
import './Home.css'
import illustratorSample from './undraw_metrics_01.svg'

const Home = () => {
  return (
    <>
      <div className="home-container" id="home">
        <div className="homepage mt-48 flex justify-center">
          <div className="homepage-title text-center text-6xl p-1">
            <h1>Maximize your</h1>
            <h1>
              <span className="font-extrabold homepage-title__span">warehouse</span>
              {' '}efficiency
            </h1>
          </div>
          <div className="home-illustrator">
            <img src={illustratorSample} alt="illustrator.svg" />
          </div>
        </div>
        <div className="subtitle xl:text-2xl md:text-base mt-40 ml-28 flex">
          <div>
            <h1>Modern inventory management software</h1>
          </div>
        </div>
        <div className="home-background">
          <img src="./bg-02.png" alt="ng-02.png" />
        </div>
      </div>
    </>
  )
}

export default Home