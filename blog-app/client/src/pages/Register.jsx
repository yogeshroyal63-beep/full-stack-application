import { Link } from 'react-router-dom'

const formStyle = {
  background: '#fff',
  border: '1px solid #ddd',
  borderRadius: '6px',
  padding: '24px',
  maxWidth: '400px',
  margin: '0 auto',
}

const inputStyle = {
  width: '100%',
  padding: '8px',
  marginBottom: '12px',
  border: '1px solid #ccc',
  borderRadius: '4px',
  fontSize: '14px',
}

const btnStyle = {
  width: '100%',
  padding: '10px',
  background: '#2c3e50',
  color: '#fff',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  fontSize: '14px',
}

function Register() {
  return (
    <div>
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Create Account</h1>
      <div style={formStyle}>
        <div>
          <label style={{ fontSize: '14px' }}>Full Name</label>
          <input type="text" placeholder="John Doe" style={inputStyle} />
        </div>
        <div>
          <label style={{ fontSize: '14px' }}>Email</label>
          <input type="email" placeholder="you@example.com" style={inputStyle} />
        </div>
        <div>
          <label style={{ fontSize: '14px' }}>Password</label>
          <input type="password" placeholder="••••••••" style={inputStyle} />
        </div>
        <div>
          <label style={{ fontSize: '14px' }}>Confirm Password</label>
          <input type="password" placeholder="••••••••" style={inputStyle} />
        </div>
        <button style={btnStyle}>Register</button>
        <p style={{ textAlign: 'center', marginTop: '12px', fontSize: '13px' }}>
          Already have an account? <Link to="/login" style={{ color: '#2980b9' }}>Login</Link>
        </p>
      </div>
    </div>
  )
}

export default Register
