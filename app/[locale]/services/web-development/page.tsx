export default async function ServicesWebDevelopmentIndexPage({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  return (
    <div style={{ padding: '120px 20px', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '20px', textAlign: 'center' }}>/services/web-development/ Directory</h1>
      <p style={{ color: '#888' }}>Please select a specific service or location.</p>
    </div>
  );
}
