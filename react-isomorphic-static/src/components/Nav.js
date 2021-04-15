import React from 'react'
import { Link } from 'react-router-dom'

export function Nav() {
  return (
    <div style={{ display: 'flex' }}>
      <Link to="/" style={{ marginRight: '1em' }}>Home</Link>
      <Link to="/about" style={{ marginRight: '1em' }}>About</Link>
      <Link to="/contact" style={{ marginRight: '1em' }}>Contact</Link>
    </div>
  )
}
