// pages/index.js
import useSWR from 'swr'

// Fetch helper
const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Home() {
  // Fetch product data from our API route
  const { data, error } = useSWR('/api/products', fetcher)

  if (error) return <div>Failed to load products.</div>
  if (!data) return <div>Loading...</div>

  return (
    <main style={{ fontFamily: 'Arial', padding: '2rem' }}>
      <h1>My Digital Store</h1>
      <p>Browse my e-books and affiliate offers below:</p>
      <div
        style={{
          display: 'grid',
          gap: '1rem',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          marginTop: '2rem'
        }}
      >
        {data.map((p) => (
          <div
            key={p.id}
            style={{
              border: '1px solid #ccc',
              borderRadius: '8px',
              padding: '1rem'
            }}
          >
            {p.image && (
              <img
                src={p.image}
                alt={p.name}
                style={{ width: '100%', borderRadius: '4px' }}
              />
            )}
            <h2 style={{ fontSize: '1.1rem', marginTop: '0.5rem' }}>{p.name}</h2>
            <p style={{ fontSize: '0.9rem' }}>{p.description}</p>
            <strong>${p.price}</strong>
            <div>
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  marginTop: '0.5rem',
                  padding: '0.4rem 0.8rem',
                  background: '#0070f3',
                  color: '#fff',
                  borderRadius: '4px',
                  textDecoration: 'none'
                }}
              >
                Buy Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
    }
