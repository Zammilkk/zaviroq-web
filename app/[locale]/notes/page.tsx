import { createClient } from '@/utils/supabase/server';

export default async function Notes() {
  const supabase = await createClient();
  const { data: notes } = await supabase.from("notes").select();

  return (
    <div style={{ padding: '40px', fontFamily: 'monospace' }}>
      <h1>Supabase Notes</h1>
      <pre style={{ background: '#f4f4f5', color: '#18181b', padding: '20px', borderRadius: '8px' }}>
        {JSON.stringify(notes, null, 2)}
      </pre>
    </div>
  );
}
