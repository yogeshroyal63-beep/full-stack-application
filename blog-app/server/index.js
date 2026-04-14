const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 5000

// Configure CORS — allowed origin is read from CLIENT_URL env variable
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:5173',
  credentials: true,
}))

app.use(express.json())

// Connectivity test endpoint
app.get('/api/ping', (req, res) => {
  res.json({ success: true, message: 'Backend is connected!' })
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})