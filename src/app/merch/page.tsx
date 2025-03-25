import Navbar from '../../ui/Navbar';
import Footer from '@/ui/Footer';

export default function Page() {
  return (
    <div
    style={{
      backgroundImage: "url('/images/grid-line-graph.png')",
      backgroundRepeat: 'repeat',
      backgroundSize: 'auto',
      backgroundColor: '#8F192A', 
      minHeight: '100vh', 
    }}>
      <Navbar />
      <p>Merch Page</p>
      <Footer />
    </div>
  );
}
