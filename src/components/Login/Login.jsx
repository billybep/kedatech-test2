import React from 'react'
import './Login.css'

function Login({ setIsOpen }) {
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none login-modal">
        <div className="modal-box">
          <div className="modal-box__form">
            <form className="form" action="#">
              <div className="u-center-text flex justify-center">
                <h2 className="heading-login text-4xl my-8">
                  LOGIN / REGISTER
                </h2>
              </div>

              <div className="form__group mb-4">
                <input type="email" className="form__input" placeholder="Email address" id="email" required/>
                {/* <label for="email" className="form__label ml-8">Email</label> */}
              </div>
              <div className="form__group">
                <input type="password" className="form__input" placeholder="Password" id="password" required/>
                {/* <label for="password" className="form__label ml-8">Password</label> */}
              </div>
            </form>
          </div>
          <div className="modal-action flex flex-wrap justify-around items-center">
            <button className="btn btn-link">register here</button>
            <button
              className="btn btn-outline btn-login ml-12"
              onClick={() => setIsOpen(false)}
            >
              LOGIN
            </button>
          </div>
          {/* Using Pic from unsplash */}
          {/* <p>
            Photo by <a href="https://unsplash.com/@glenncarstenspeters?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Glenn Carstens-Peters</a> on <a href="https://unsplash.com/s/photos/company?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
          </p> */}
        </div>
      </div>
    </>
  )
}

export default Login
