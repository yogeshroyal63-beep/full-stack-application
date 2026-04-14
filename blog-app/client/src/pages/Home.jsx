import { Link } from 'react-router-dom'

const posts = [
  { id: 1, title: 'Getting Started with React', author: 'Alice', date: 'Jan 10, 2024', summary: 'Learn the basics of React and build your first component.' },
  { id: 2, title: 'CSS Tips for Beginners', author: 'Bob', date: 'Jan 15, 2024', summary: 'Useful CSS tricks to improve your web designs quickly.' },
  { id: 3, title: 'JavaScript ES6 Features', author: 'Carol', date: 'Jan 20, 2024', summary: 'Explore modern JavaScript features like arrow functions and destructuring.' },
]

function Home() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ marginBottom: '8px' }}>Welcome to BlogSpace</h1>
      <p style={{ marginBottom: '24px', color: '#666' }}>Read and share stories from developers around the world.</p>

      {posts.map(post => (
        <div key={post.id} style={{ background: '#fff', border: '1px solid #ddd', borderRadius: '6px', padding: '16px', marginBottom: '16px' }}>
          <h2 style={{ fontSize: '18px', marginBottom: '4px' }}>{post.title}</h2>
          <p style={{ fontSize: '12px', color: '#888', marginBottom: '8px' }}>By {post.author} · {post.date}</p>
          <p style={{ color: '#555', marginBottom: '12px' }}>{post.summary}</p>
          <Link to="/dashboard" style={{ color: '#2980b9', fontSize: '14px' }}>Read more →</Link>
        </div>
      ))}
    </div>
  )
}

export default Home
