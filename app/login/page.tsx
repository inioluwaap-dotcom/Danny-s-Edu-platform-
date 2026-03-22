export default function LoginPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', backgroundColor: '#ffffff', padding: '20px', fontFamily: 'sans-serif' }}>
      <div style={{ width: '100%', maxWidth: '400px', border: '1px solid #e5e7eb', padding: '30px', borderRadius: '16px' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', textAlign: 'center' }}>Login to Account</h2>
        <input type="email" placeholder="Email Address" style={{ width: '100%', padding: '12px', marginBottom: '1rem', borderRadius: '8px', border: '1px solid #d1d5db' }} />
        <input type="password" placeholder="Password" style={{ width: '100%', padding: '12px', marginBottom: '1.5rem', borderRadius: '8px', border: '1px solid #d1d5db' }} />
        <button style={{ width: '100%', backgroundColor: '#000000', color: 'white', padding: '12px', borderRadius: '8px', fontWeight: 'bold', border: 'none' }}>
          Sign In
        </button>
      </div>
    </div>
  );
}
