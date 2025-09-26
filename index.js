// pages/index.js
export default function Home() {
  return (
    <div style={{padding: '2rem', fontFamily: 'sans-serif'}}>
      <h1>Welcome to My Store</h1>
      <p>Your product API is live at <a href="/api/products">/api/products</a>.</p>
    </div>
  );
}
