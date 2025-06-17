import Footer from '../components/Footer';
import Header from '../components/Header';
import WhatsappButton from '../components/WhatsappButton';

export default function HomePage() {
  return (    <main className="pt-[72px]">
      <Header />
      {/* <GradientContainer /> */}
      <WhatsappButton />
      <Footer />
      {/* Adicione mais seções aqui conforme necessário */}
    </main>
  );
}