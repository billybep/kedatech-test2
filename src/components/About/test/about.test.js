import { render, screen } from '@testing-library/react';
import About from '../About';

describe('Test Component About', () => {
  it('Should render About Title', () => {
    render(<About />)

    const aboutTitle = screen.getByText("We Improve performance & process time")
    expect(aboutTitle).toBeInTheDocument()
  })

  it('Should render About subtitle 1 & 2', () => {
    render(<About />)

    const subtitle1 = screen.getByText("5+ years")
    expect(subtitle1).toBeInTheDocument()

    const subtitle2 = screen.getByText("310+ Clients")
    expect(subtitle2).toBeInTheDocument()
  })

  it('Should render button get started', async () => {
    render(<About />)

    const buttonGetStarted = screen.getByRole('button', {
      name: 'Get started'
    })

    expect(buttonGetStarted).toBeInTheDocument()
  })
})
