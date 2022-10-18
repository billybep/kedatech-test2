import React from 'react'
import './Login.css'

function Login({ setIsOpen }) {
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none login-modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Congratulations random Internet user!</h3>
          <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
          <div className="modal-action">
          <div className="btn" onClick={() => setIsOpen(false)}>Login</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
