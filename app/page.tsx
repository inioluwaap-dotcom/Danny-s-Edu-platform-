export default function LandingPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', backgroundColor: '#f0f9ff', padding: '20px font-family: sans-serif' }}>
      <h1 style={{ color: '#1e40af', fontSize: '2.5rem', marginBottom: '1rem' }}>My Platform</h1>
      <p style={{ color: '#1e3a8a', fontSize: '1.2rem', marginBottom: '2rem', textAlign: 'center' }}>
        The easiest way to manage your workflow from your phone.
      </p>
      <a href="/login" style={{ backgroundColor: '#2563eb', color: 'white', padding: '16px 32px', borderRadius: '12px', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.1rem' }}>
        Get Started
      </a>
    </div>
  );
}
