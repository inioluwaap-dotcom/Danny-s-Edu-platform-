export default function DashboardPage() {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', backgroundColor: '#f9fafb', minHeight: '100vh' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>User Dashboard</h1>
        <button style={{ color: '#dc2626', fontWeight: 'bold', background: 'none', border: 'none' }}>Logout</button>
      </div>
      
      <div style={{ display: 'grid', gap: '20px' }}>
        <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
          <h3 style={{ color: '#6b7280', fontSize: '0.8rem', textTransform: 'uppercase' }}>Active Projects</h3>
          <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>0</p>
        </div>
        <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
          <h3 style={{ color: '#6b7280', fontSize: '0.8rem', textTransform: 'uppercase' }}>Recent Messages</h3>
          <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>Welcome!</p>
        </div>
      </div>
    </div>
  );
}
