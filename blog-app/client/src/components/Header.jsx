import { Link } from 'react-router-dom'

const headerStyle = {
  background: '#2c3e50',
  color: '#fff',
  padding: '12px 24px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}

const navStyle = {
  display: 'flex',
  gap: '16px',
}

const linkStyle = {
  color: '#fff',
  fontSize: '14px',
}

function Header() {
  return (
    <header style={headerStyle}>
      <Link to="/" style={{ color: '#fff', fontSize: '20px', fontWeight: 'bold' }}>
        BlogSpace
      </Link>
      <nav style={navStyle}>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/dashboard" style={linkStyle}>Dashboard</Link>
        <Link to="/login" style={linkStyle}>Login</Link>
        <Link to="/register" style={linkStyle}>Register</Link>
      </nav>
    </header>
  )
}

export default Header
