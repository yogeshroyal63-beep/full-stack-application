const cardStyle = {
  background: '#fff',
  border: '1px solid #ddd',
  borderRadius: '6px',
  padding: '16px',
  marginBottom: '16px',
}

const myPosts = [
  { id: 1, title: 'My First Blog Post', status: 'Published', date: 'Jan 10, 2024' },
  { id: 2, title: 'React Hooks Explained', status: 'Draft', date: 'Jan 18, 2024' },
  { id: 3, title: 'Why I Love Open Source', status: 'Published', date: 'Jan 25, 2024' },
]

function Dashboard() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ marginBottom: '4px' }}>Dashboard</h1>
      <p style={{ color: '#666', marginBottom: '24px' }}>Welcome back, John! Manage your blog posts here.</p>

      <div style={{ display: 'flex', gap: '16px', marginBottom: '24px' }}>
        <div style={{ ...cardStyle, flex: 1, textAlign: 'center' }}>
          <h2 style={{ fontSize: '28px' }}>3</h2>
          <p style={{ color: '#888', fontSize: '13px' }}>Total Posts</p>
        </div>
        <div style={{ ...cardStyle, flex: 1, textAlign: 'center' }}>
          <h2 style={{ fontSize: '28px' }}>2</h2>
          <p style={{ color: '#888', fontSize: '13px' }}>Published</p>
        </div>
        <div style={{ ...cardStyle, flex: 1, textAlign: 'center' }}>
          <h2 style={{ fontSize: '28px' }}>1</h2>
          <p style={{ color: '#888', fontSize: '13px' }}>Drafts</p>
        </div>
      </div>

      <h2 style={{ marginBottom: '12px', fontSize: '18px' }}>My Posts</h2>
      <div style={cardStyle}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid #eee', textAlign: 'left' }}>
              <th style={{ padding: '8px' }}>Title</th>
              <th style={{ padding: '8px' }}>Status</th>
              <th style={{ padding: '8px' }}>Date</th>
            </tr>
          </thead>
          <tbody>
            {myPosts.map(post => (
              <tr key={post.id} style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '8px' }}>{post.title}</td>
                <td style={{ padding: '8px' }}>
                  <span style={{
                    background: post.status === 'Published' ? '#d4edda' : '#fff3cd',
                    color: post.status === 'Published' ? '#155724' : '#856404',
                    padding: '2px 8px',
                    borderRadius: '12px',
                    fontSize: '12px',
                  }}>
                    {post.status}
                  </span>
                </td>
                <td style={{ padding: '8px', color: '#888' }}>{post.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Dashboard
