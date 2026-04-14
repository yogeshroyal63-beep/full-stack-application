import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div style={{ textAlign: 'center', padding: '60px 20px' }}>
      <h1 style={{ fontSize: '72px', color: '#ccc', marginBottom: '8px' }}>404</h1>
      <h2 style={{ marginBottom: '12px' }}>Page Not Found</h2>
      <p style={{ color: '#666', marginBottom: '24px' }}>The page you're looking for doesn't exist.</p>
      <Link to="/" style={{
        background: '#2c3e50',
        color: '#fff',
        padding: '10px 20px',
        borderRadius: '4px',
        fontSize: '14px',
      }}>
        Go Back Home
      </Link>
    </div>
  )
}

export default NotFound
