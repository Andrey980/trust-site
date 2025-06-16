import Footer from '../components/Footer';
import Header from '../components/Header';
import WhatsappButton from '../components/WhatsappButton';
import AcoesContent from './components/AcoesContent';
// import GradientContainer from './components/GradientContainer';
import HeroContent from './components/HeroContent';
import HistoryContent from './components/HistoryContent';
import IdealServices from './components/IdealServices';
import SeguradorasContent from './components/SeguradorasContent';

export default function HomePage() {
  return (    <main className="pt-[72px]">
      <Header />
      <HeroContent />
      <IdealServices />
      {/* <GradientContainer /> */}
      <HistoryContent />
      <AcoesContent />
      <SeguradorasContent />
      <WhatsappButton />
      <Footer />
      {/* Adicione mais seções aqui conforme necessário */}
    </main>
  );
}