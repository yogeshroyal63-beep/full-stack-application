import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

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
  marginBottom: '4px',
  border: '1px solid #ccc',
  borderRadius: '4px',
  fontSize: '14px',
  boxSizing: 'border-box',
}

const inputErrorStyle = {
  ...inputStyle,
  border: '1px solid #e74c3c',
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
  marginTop: '8px',
}

const btnDisabledStyle = {
  ...btnStyle,
  background: '#95a5a6',
  cursor: 'not-allowed',
}

const errorTextStyle = {
  color: '#e74c3c',
  fontSize: '12px',
  marginBottom: '10px',
  display: 'block',
}

const successBoxStyle = {
  background: '#eafaf1',
  border: '1px solid #2ecc71',
  borderRadius: '4px',
  padding: '12px',
  marginBottom: '16px',
  color: '#1e8449',
  fontSize: '14px',
  textAlign: 'center',
}

const errorBoxStyle = {
  background: '#fdedec',
  border: '1px solid #e74c3c',
  borderRadius: '4px',
  padding: '12px',
  marginBottom: '16px',
  color: '#c0392b',
  fontSize: '14px',
  textAlign: 'center',
}

function validate(fields) {
  const errors = {}

  if (!fields.name.trim()) {
    errors.name = 'Full name is required.'
  } else if (fields.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters.'
  }

  if (!fields.email.trim()) {
    errors.email = 'Email is required.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
    errors.email = 'Enter a valid email address.'
  }

  if (!fields.password) {
    errors.password = 'Password is required.'
  } else if (fields.password.length < 6) {
    errors.password = 'Password must be at least 6 characters.'
  }

  if (!fields.confirmPassword) {
    errors.confirmPassword = 'Please confirm your password.'
  } else if (fields.password !== fields.confirmPassword) {
    errors.confirmPassword = 'Passwords do not match.'
  }

  return errors
}

function Register() {
  const navigate = useNavigate()

  const [fields, setFields] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const [fieldErrors, setFieldErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState('')
  const [apiError, setApiError] = useState('')

  function handleChange(e) {
    const { name, value } = e.target
    setFields((prev) => ({ ...prev, [name]: value }))
    // Clear field error on change
    setFieldErrors((prev) => ({ ...prev, [name]: '' }))
    setApiError('')
    setSuccess('')
  }

  async function handleSubmit(e) {
    e.preventDefault()

    const errors = validate(fields)
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors)
      return
    }

    setLoading(true)
    setApiError('')
    setSuccess('')

    try {
      const res = await fetch('/api/users/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: fields.name.trim(),
          email: fields.email.trim(),
          password: fields.password,
        }),
      })

      const data = await res.json()

      if (!res.ok) {
        setApiError(data.message || 'Registration failed. Please try again.')
      } else {
        setSuccess('Account created successfully! Redirecting to login…')
        setFields({ name: '', email: '', password: '', confirmPassword: '' })
        setTimeout(() => navigate('/login'), 2000)
      }
    } catch (err) {
      setApiError('Network error. Please check your connection and try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Create Account</h1>
      <div style={formStyle}>

        {success && <div style={successBoxStyle}>{success}</div>}
        {apiError && <div style={errorBoxStyle}>{apiError}</div>}

        <form onSubmit={handleSubmit} noValidate>
          <div>
            <label style={{ fontSize: '14px' }}>Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="John Doe"
              value={fields.name}
              onChange={handleChange}
              style={fieldErrors.name ? inputErrorStyle : inputStyle}
              disabled={loading}
            />
            {fieldErrors.name && <span style={errorTextStyle}>{fieldErrors.name}</span>}
          </div>

          <div>
            <label style={{ fontSize: '14px' }}>Email</label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              value={fields.email}
              onChange={handleChange}
              style={fieldErrors.email ? inputErrorStyle : inputStyle}
              disabled={loading}
            />
            {fieldErrors.email && <span style={errorTextStyle}>{fieldErrors.email}</span>}
          </div>

          <div>
            <label style={{ fontSize: '14px' }}>Password</label>
            <input
              type="password"
              name="password"
              placeholder="••••••••"
              value={fields.password}
              onChange={handleChange}
              style={fieldErrors.password ? inputErrorStyle : inputStyle}
              disabled={loading}
            />
            {fieldErrors.password && <span style={errorTextStyle}>{fieldErrors.password}</span>}
          </div>

          <div>
            <label style={{ fontSize: '14px' }}>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="••••••••"
              value={fields.confirmPassword}
              onChange={handleChange}
              style={fieldErrors.confirmPassword ? inputErrorStyle : inputStyle}
              disabled={loading}
            />
            {fieldErrors.confirmPassword && (
              <span style={errorTextStyle}>{fieldErrors.confirmPassword}</span>
            )}
          </div>

          <button
            type="submit"
            style={loading ? btnDisabledStyle : btnStyle}
            disabled={loading}
          >
            {loading ? 'Creating Account…' : 'Register'}
          </button>
        </form>

        <p style={{ textAlign: 'center', marginTop: '12px', fontSize: '13px' }}>
          Already have an account?{' '}
          <Link to="/login" style={{ color: '#2980b9' }}>Login</Link>
        </p>
        
      </div>

    </div>
  )
}

export default Register
