import React from 'react'
import './About.css'
import aboutPic from './undraw_empty_street_re_atjq.svg'

const About = () => {
  return (
    <>
      <section className="section-about" id="about">
        <div className="u-center-text pt-48">
          <h2 className="heading-secondary text-4xl mb-12">
            We Improve performance & process time
          </h2>
        </div>

        <div className="flex justify-center flex-wrap">
          <div className="text-content mx-2 flex-initial">
            <h3 className="heading-tertiary text-2xl mb-2">5+ years</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, dolore ducimus provident quaerat magni beatae quos ex eligendi, voluptatem consequuntur, delectus quam deleniti sequi nihil cumque. Fuga cumque fugit minima.
            </p>

            <h3 className="heading-tertiary text-2xl mb-2 mt-12">310+ Clients</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, dolore ducimus provident quaerat magni beatae quos ex eligendi, voluptatem consequuntur, delectus quam deleniti sequi nihil cumque. Fuga cumque fugit minima.
            </p>
            <button className="btn btn-link pl-0 mt-4">Get started</button>
          </div>
          <div className="image-content mx-2 flex-initial self-center">
            <div className="composition flex justify-center">
              <img src={aboutPic} alt="about.svg" className="composition__photo composition__photo--1 p-2" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About