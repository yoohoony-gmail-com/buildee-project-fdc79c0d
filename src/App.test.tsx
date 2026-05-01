import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from './App'
import '@testing-library/jest-dom'

describe('App', function() {
  it('should render the site name in the header', function() {
    render(<App />)
    const siteName = screen.getByRole('heading', { name: /Site/i, level: 1 })
    expect(siteName).toBeInTheDocument()
  })

  it('should render the main gallery heading', function() {
    render(<App />)
    const galleryHeading = screen.getByRole('heading', { name: /갤러리/i })
    expect(galleryHeading).toBeInTheDocument()
  })

  it('should render the gallery description', function() {
    render(<App />)
    const description = screen.getByText(/사진과 작품을 전시합니다./i)
    expect(description).toBeInTheDocument()
  })
})
