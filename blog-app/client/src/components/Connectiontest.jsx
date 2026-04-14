import { useState } from 'react'

const boxStyle = {
  maxWidth: '480px',
  margin: '40px auto',
  padding: '24px',
  background: '#fff',
  border: '1px solid #ddd',
  borderRadius: '8px',
  textAlign: 'center',
}

const btnStyle = {
  padding: '10px 24px',
  background: '#2c3e50',
  color: '#fff',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  fontSize: '14px',
}

function ConnectionTest() {
  const [status, setStatus] = useState(null)   // 'success' | 'error'
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const testConnection = async () => {
    setLoading(true)
    setStatus(null)
    setMessage('')
    try {
      const res = await fetch('/api/ping')      // relative URL — proxied by Vite
      const data = await res.json()
      setStatus('success')
      setMessage(data.message)
    } catch (err) {
      setStatus('error')
      setMessage('Could not reach the backend. Is the server running?')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={boxStyle}>
      <h2 style={{ marginBottom: '8px' }}>Connection Test</h2>
      <p style={{ color: '#666', fontSize: '14px', marginBottom: '20px' }}>
        Click below to verify frontend ↔ backend connectivity.
      </p>

      <button style={btnStyle} onClick={testConnection} disabled={loading}>
        {loading ? 'Testing…' : 'Test Connection'}
      </button>

      {status && (
        <div
          style={{
            marginTop: '20px',
            padding: '12px 16px',
            borderRadius: '6px',
            background: status === 'success' ? '#d4edda' : '#f8d7da',
            color: status === 'success' ? '#155724' : '#721c24',
            fontSize: '14px',
          }}
        >
          {status === 'success' ? '✅' : '❌'} {message}
        </div>
      )}
    </div>
  )
}

export default ConnectionTest
