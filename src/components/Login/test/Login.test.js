import { render, screen } from '@testing-library/react';
import Login from '../Login';

describe('Test Component Login', () => {
  it('Should render modal login', () => {
    render(<Login />)

    const loginTitle = screen.getByText("LOGIN / REGISTER")
    expect(loginTitle).toBeInTheDocument()
  })

  it('Should render button register', () => {
    render(<Login />)

    const btnRegister = screen.getByRole('button', {
      name: 'register here'
    })

    expect(btnRegister).toBeInTheDocument()
  })

  it('Should render button login', () => {
    render(<Login />)

    const btnLogin = screen.getByRole('button', {
      name: 'LOGIN'
    })

    expect(btnLogin).toBeInTheDocument()
  })
})
