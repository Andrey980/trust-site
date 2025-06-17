import Footer from '../components/Footer';
import Header from '../components/Header';
import WhatsappButton from '../components/WhatsappButton';
// import GradientContainer from './components/GradientContainer';

export default function HomePage() {
  return (    <main className="pt-[72px]">
      <Header />
      <WhatsappButton />
      <Footer />
    </main>
  );
}